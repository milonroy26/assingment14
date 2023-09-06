import { NextResponse } from "next/server";

export async function POST(req, res){
    const jsonBody = await req.json();
    let ToEmail = jsonBody;
    const transporter = nodemailer.createTransport({
        host: "mail.teamrabbil.com",
        port: 25,
        secure: false,
        auth: {
          user: "info@teamrabbil.com",
          pass: "~sR4[bhaC[Qs",
        },
        tls: { rejectUnauthorized: false },
      });

      let myEmail = {
        from: "Task Maneger Next Js <info@teamrabbil.com>",
        to: ToEmail,
        subject: "Text Email From Next Js",
        text: "Text Email From Next Js  App And Your Code Is 1234 ",
      };

      try{
        let result = await transporter.sendMail(myEmail);
        return NextResponse.json(
            {message: result},
            {
                status: 200,
                headers: {
                    "Set-Cookie": `email=${ToEmail}; Max-Age=7200; Secure; HttpOnly; Path=/; SameSite=Strict`,
                },
            }
        )
      }
      catch(e){
        return NextResponse.json({ message: "Fail" });
      }
}