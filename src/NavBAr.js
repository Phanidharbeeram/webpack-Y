import React, { useEffect } from "react";
import { Link, animatedscroll as scroll } from "react-scroll";
import transfor from "jump.js";

export default function NavBAr() {
  useEffect(() => {
    transfor("#nav");
  }, []);

  return (
    <div>
      <div id="nav">
        <ul>
          <li>
            <Link
              activeClass="active"
              className="c"
              to="first"
              spy={true}
              smooth={true}
            >
              First
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              className="c"
              to="second"
              spy={true}
              smooth={true}
            >
              second
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              className="c"
              to="third"
              spy={true}
              smooth={true}
            >
              Third
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              className="c"
              to="four"
              spy={true}
              smooth={true}
            >
              Four
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              className="c"
              to="five"
              spy={true}
              smooth={true}
            >
              Five
            </Link>
          </li>
        </ul>{" "}
      </div>
    </div>
  );
}
