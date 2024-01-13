import { Logout } from "./Logout";
import Image from "next/image";
import Link from "next/link";

const Navbar = () =>
  // { page, image }
  {
    return (
      <div id="sticky_header">
        <div className="flex justify-between items-center p-2">
          <Link href="/dashboard" id="back">
            Back
          </Link>
          {/* {page == 'Tracker' ? (
                    <Logout />
                ) : (
                    <Link href='/dashboard' id="back">
                        Back
                    </Link>
                )} */}
          <h1 className=" text-xl font-bold">
            Expense Tracker
            {/* {page} */}
          </h1>
          {/* <Image src={image} alt="profile pic" width={50} height={50} className="rounded-full" /> */}
        </div>
      </div>
    );
  };

export default Navbar;
