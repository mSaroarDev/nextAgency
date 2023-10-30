import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <div className="w-full bg-base-100 shadow-md fixed top-0 z-50">
        <div className="px-10">
          <div className="navbar">
            <div className="flex-1">
              <a className="normal-case text-xl font-bold">
                Next<span className="text-brandColor">Agency</span>
              </a>
            </div>
            <div className="flex-none">
              <ul className="menu menu-horizontal px-1 font-semibold">
                <li>
                  <Link href={"/"}>Homepage</Link>
                </li>
                <li>
                  <Link href={"/pages/about"}>About</Link>
                </li>
                <li>
                  <Link href={"/pages/service"}>Service</Link>
                </li>
                <li>
                  <Link href={"/pages/blog"}>Blog</Link>
                </li>
                <li>
                  <Link href={"/pages/contact"}>Contact</Link>
                </li>
                <li>
                  <Link
                    className="flex items-center justify-center bg-brandColor text-white rounded-md hover:bg-brandColor/20 hover:text-brandColor duration-300"
                    href={"/pages/login"}
                  >
                    Login
                  </Link>
                </li>
                {/* <li>
                  <details>
                    <summary>Parent</summary>
                    <ul className="p-2 bg-base-100">
                      <li>
                        <a>Link 1</a>
                      </li>
                      <li>
                        <a>Link 2</a>
                      </li>
                    </ul>
                  </details>
                </li> */}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
