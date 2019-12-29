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
              offset={0}
              duration={500}
              // delay={2000}
              //onSetActive={handleSetActive}
            >
              First Page
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              className="c"
              to="second"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              // delay={2000}
              //onSetActive={handleSetActive}
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
              offset={0}
              duration={500}
              // delay={2000}
              //onSetActive={handleSetActive}
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
              offset={0}
              duration={500}
              // delay={2000}
              //onSetActive={handleSetActive}
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
              offset={0}
              duration={500}
              // delay={2000}
              //onSetActive={handleSetActive}
            >
              Five
            </Link>
          </li>
        </ul>{" "}
      </div>
    </div>
  );
}
