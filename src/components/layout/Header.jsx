"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Header = () => {
  const router = useRouter();

  const logout = async () => {
    const res = await fetch("/api/verify");
    const data = await res.json();
    if (data["status"] === true) {
      router.replace("/");
    }
  };
  return (
    <>
      <div className="navbar bg-indigo-950 fixed z-[99999]">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl text-white">
            <img
              className="w-[70px] h-[70px rounded-sm"
              src="https://w2.chabad.org/media/images/1065/TVEm10658964.jpg"
              alt=""
            />
          </a>
        </div>

        <div className="flex-none gap-2">
          <Link href="/" className="me-11 text-white">
            হোম
          </Link>

          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <Image
                  src="https://bdassistant.com/assets/image/svgs/profile-user.svg"
                  width="300"
                  height="200"
                />
              </div>
            </label>

            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li onClick={logout}>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
