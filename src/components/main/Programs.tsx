import { pageStrings } from "../../assets/text/pageStrings";
import { imageUrls } from "../../assets/imgs/imageUrls";
import PlanCard from "../sub/PlanCard";

const Programs = () => {
  return (
    <div className="bg-background my-56 mx-44 p-20 rounded-lg font-body">
      <div className="flex flex-row items-center justify-between">
        <img
          src={imageUrls.la}
          alt=""
          className="w-2/5 h-2/5 rounded-full border-[20px] border-lightblue"
        />
        <div className="w-1/2">
          <h1 className="text-4xl text-orange">
            {pageStrings.services.header}
          </h1>
          <p className="text-lg leading-10 my-5 text-left">
            {pageStrings.services.p1}
          </p>
        </div>
      </div>
      <div className="my-16">
        
        <div className="mt-10">
          <h1 className="block my-0 mx-auto w-4/5 mb-5 text-3xl text-white bg-pink text-center shadow-lg px-3">
            {pageStrings.services.plans.one_on_one.title}
          </h1>
          <div className="flex flex-row items-center justify-center text-left">
            <PlanCard plan={pageStrings.services.plans.one_on_one} />
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              width="200.00"
              height="200.00"
              viewBox="0 0 200.0 200.0"
            >
              {" "}
              <g
                id="document"
                transform="scale(0.048828125 0.048828125) translate(2048.0 2048.0)"
              >
                {" "}
                <g>
                  {" "}
                  <defs>
                    {" "}
                    <filter
                      id="shlkXbU8"
                      x="-4.31%"
                      y="-4.02%"
                      width="114.08%"
                      height="113.79%"
                      filterUnits="objectBoundingBox"
                    >
                      {" "}
                      <feOffset
                        dx="4.81"
                        dy="7.22"
                        in="SourceAlpha"
                        result="shadowOffsetOuter1"
                      />{" "}
                      <feGaussianBlur
                        stdDeviation="20.40"
                        in="shadowOffsetOuter1"
                        result="shadowBlurOuter1"
                      />{" "}
                      <feFlood floodColor="#000000" floodOpacity="0.36" />{" "}
                      <feComposite in2="shadowBlurOuter1" operator="in" />{" "}
                      <feMerge>
                        {" "}
                        <feMergeNode /> <feMergeNode in="SourceGraphic" />{" "}
                      </feMerge>{" "}
                    </filter>{" "}
                  </defs>{" "}
                  <path
                    d="M-327.242,-1157.14 C-242.2,-1371.48 0.494833,-1476.3 214.833,-1391.26 C429.171,-1306.21 533.986,-1063.52 448.944,-849.181 C363.902,-634.843 121.207,-530.028 -93.1311,-615.07 C-307.469,-700.112 -412.284,-942.807 -327.242,-1157.14 Z "
                    fill="#f2e689"
                    fillOpacity="1.00"
                    filter="url(#shlkXbU8)"
                  />{" "}
                  <defs>
                    {" "}
                    <filter
                      id="8Eqvipf2"
                      x="-5.15%"
                      y="-4.41%"
                      width="116.84%"
                      height="115.12%"
                      filterUnits="objectBoundingBox"
                    >
                      {" "}
                      <feOffset
                        dx="12.73"
                        dy="19.09"
                        in="SourceAlpha"
                        result="shadowOffsetOuter1"
                      />{" "}
                      <feGaussianBlur
                        stdDeviation="53.96"
                        in="shadowOffsetOuter1"
                        result="shadowBlurOuter1"
                      />{" "}
                      <feFlood floodColor="#000000" floodOpacity="0.36" />{" "}
                      <feComposite in2="shadowBlurOuter1" operator="in" />{" "}
                      <feMerge>
                        {" "}
                        <feMergeNode /> <feMergeNode in="SourceGraphic" />{" "}
                      </feMerge>{" "}
                    </filter>{" "}
                  </defs>{" "}
                  <path
                    d="M381.612,-1572.38 C381.663,-1557.54 380.412,-1540.52 377.859,-1521.3 C399.209,-1532.29 413.581,-1541.5 420.976,-1548.95 C502.002,-1595.49 600.625,-1601.94 691.488,-1580.43 C781.933,-1553.24 855.453,-1497.63 900.697,-1414.41 C961.3,-1307.25 959.154,-1169.31 896.661,-1064.34 C865.414,-1011.85 821.047,-967.181 763.089,-939.484 C750.019,-932.455 735.647,-923.24 716.901,-916.628 C737,-910.586 750.121,-902.775 763.242,-894.963 C931.633,-794.713 986.499,-578.406 886.25,-410.016 C786,-241.625 567.506,-188.06 403.489,-285.706 C390.368,-293.518 377.247,-301.329 362.355,-316.119 C364.176,-294.301 362.925,-277.274 364.278,-264.62 C363.18,-203.072 349.428,-140.172 318.182,-87.6862 C253.085,21.6582 137.638,86.2176 9.75157,87.0932 C-85.8507,83.4931 -172.39,49.7446 -235.912,-17.6923 C-302.922,-84.2442 -337.282,-175.788 -337.171,-270.505 C-337.222,-285.345 -335.971,-302.373 -333.418,-321.587 C-350.394,-307.997 -364.767,-298.782 -376.535,-293.94 C-545.565,-199.079 -763.582,-260.748 -856.256,-428.476 C-919.046,-536.945 -918.202,-672.694 -853.105,-782.038 C-821.858,-834.524 -777.491,-879.197 -723.907,-909.499 C-710.837,-916.527 -696.464,-925.743 -677.718,-932.354 C-700.004,-939.698 -713.126,-947.51 -726.247,-955.321 C-894.637,-1055.57 -949.504,-1271.88 -849.254,-1440.27 C-749.005,-1608.66 -532.697,-1663.53 -364.307,-1563.28 C-351.186,-1555.46 -340.668,-1543.28 -320.986,-1531.56 C-324.109,-1551.19 -325.045,-1569.52 -322.909,-1583.06 C-321.811,-1644.61 -303.685,-1704.9 -272.439,-1757.39 C-207.342,-1866.73 -89.7084,-1929.99 33.3875,-1927.8 C228.498,-1927.16 382.252,-1767.49 381.612,-1572.38 Z M-163.873,-1029.27 C-225.065,-926.488 -191.437,-793.913 -88.6531,-732.721 C14.1306,-671.53 148.893,-703.856 210.084,-806.64 C271.276,-909.424 237.648,-1042 132.677,-1104.49 C27.7065,-1166.99 -102.682,-1132.06 -163.873,-1029.27 Z "
                    fill="#90bcd5"
                    fillOpacity="1.00"
                    filter="url(#8Eqvipf2)"
                  />{" "}
                  <defs>
                    {" "}
                    <filter
                      id="V4wc6hqX"
                      x="-211.87%"
                      y="-11.84%"
                      width="792.25%"
                      height="140.61%"
                      filterUnits="objectBoundingBox"
                    >
                      {" "}
                      <feOffset
                        dx="33.22"
                        dy="49.83"
                        in="SourceAlpha"
                        result="shadowOffsetOuter1"
                      />{" "}
                      <feGaussianBlur
                        stdDeviation="140.87"
                        in="shadowOffsetOuter1"
                        result="shadowBlurOuter1"
                      />{" "}
                      <feFlood floodColor="#000000" floodOpacity="0.36" />{" "}
                      <feComposite in2="shadowBlurOuter1" operator="in" />{" "}
                      <feMerge>
                        {" "}
                        <feMergeNode /> <feMergeNode in="SourceGraphic" />{" "}
                      </feMerge>{" "}
                    </filter>{" "}
                  </defs>{" "}
                  <path
                    d="M-94.6318,1859.95 L-61.2727,177.471 L22.6646,63.9776 L14.6775,2022.46 L-94.6318,1859.95 Z "
                    fill="#2c5610"
                    fillOpacity="1.00"
                    filter="url(#V4wc6hqX)"
                  />{" "}
                  <g>
                    {" "}
                    <defs>
                      {" "}
                      <filter
                        id="g41DVoV9"
                        x="-6.57%"
                        y="-5.80%"
                        width="121.48%"
                        height="119.91%"
                        filterUnits="objectBoundingBox"
                      >
                        {" "}
                        <feOffset
                          dx="8.80"
                          dy="13.20"
                          in="SourceAlpha"
                          result="shadowOffsetOuter1"
                        />{" "}
                        <feGaussianBlur
                          stdDeviation="37.30"
                          in="shadowOffsetOuter1"
                          result="shadowBlurOuter1"
                        />{" "}
                        <feFlood floodColor="#000000" floodOpacity="0.36" />{" "}
                        <feComposite in2="shadowBlurOuter1" operator="in" />{" "}
                        <feMerge>
                          {" "}
                          <feMergeNode /> <feMergeNode in="SourceGraphic" />{" "}
                        </feMerge>{" "}
                      </filter>{" "}
                    </defs>{" "}
                    <path
                      d="M1135.12,973.51 C1133.96,970.189 826.849,1115.26 556.565,1407.76 C286.281,1700.27 132.856,2028.22 134.021,2031.54 C130.701,2032.71 467.781,1882.71 745.783,1585.63 C1020.96,1285.82 1135.12,973.51 1135.12,973.51 Z "
                      fill="#224b07"
                      fillOpacity="1.00"
                      filter="url(#g41DVoV9)"
                    />{" "}
                    <defs>
                      {" "}
                      <filter
                        id="Vt4HckQn"
                        x="-15.47%"
                        y="-6.61%"
                        width="150.53%"
                        height="122.68%"
                        filterUnits="objectBoundingBox"
                      >
                        {" "}
                        <feOffset
                          dx="8.80"
                          dy="13.20"
                          in="SourceAlpha"
                          result="shadowOffsetOuter1"
                        />{" "}
                        <feGaussianBlur
                          stdDeviation="37.30"
                          in="shadowOffsetOuter1"
                          result="shadowBlurOuter1"
                        />{" "}
                        <feFlood floodColor="#000000" floodOpacity="0.36" />{" "}
                        <feComposite in2="shadowBlurOuter1" operator="in" />{" "}
                        <feMerge>
                          {" "}
                          <feMergeNode /> <feMergeNode in="SourceGraphic" />{" "}
                        </feMerge>{" "}
                      </filter>{" "}
                    </defs>{" "}
                    <path
                      d="M370.096,1439.64 C487.872,1180.14 485.5,923.648 487.161,923.065 C483.84,924.23 296.968,1071.86 184.085,1324.04 C70.1232,1578.47 61.6317,1851.83 61.6317,1851.83 C61.6317,1851.83 252.319,1699.14 370.096,1439.64 Z "
                      fill="#224b07"
                      fillOpacity="1.00"
                      filter="url(#Vt4HckQn)"
                    />{" "}
                  </g>{" "}
                </g>{" "}
              </g>{" "}
            </svg>
          </div>
        </div>

        {/* <div className="block w-4/5 h-[2px] bg-pink my-10 mx-auto"></div> */}

        <div className="mt-10">
          <h1 className="block my-0 mx-auto w-4/5 mb-5 text-3xl text-white bg-pink text-center shadow-lg px-3">
            {pageStrings.services.plans.four_week.title}
          </h1>
          <div className="flex flex-row items-center justify-center text-left">
            <PlanCard plan={pageStrings.services.plans.four_week} />
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              width="200.00"
              height="200.00"
              viewBox="0 0 200.0 200.0"
            >
              {" "}
              <g
                id="document"
                transform="scale(0.048828125 0.048828125) translate(2048.0 2048.0)"
              >
                {" "}
                <g>
                  {" "}
                  <defs>
                    {" "}
                    <filter
                      id="xcz2qYrl"
                      x="-208.24%"
                      y="-48.12%"
                      width="731.38%"
                      height="258.20%"
                      filterUnits="objectBoundingBox"
                    >
                      {" "}
                      <feOffset
                        dx="23.19"
                        dy="185.50"
                        in="SourceAlpha"
                        result="shadowOffsetOuter1"
                      />{" "}
                      <feGaussianBlur
                        stdDeviation="737.39"
                        in="shadowOffsetOuter1"
                        result="shadowBlurOuter1"
                      />{" "}
                      <feFlood floodColor="#000000" floodOpacity="0.21" />{" "}
                      <feComposite in2="shadowBlurOuter1" operator="in" />{" "}
                      <feMerge>
                        {" "}
                        <feMergeNode /> <feMergeNode in="SourceGraphic" />{" "}
                      </feMerge>{" "}
                    </filter>{" "}
                  </defs>{" "}
                  <path
                    d="M-698.882,1823.17 C-698.882,1823.17 -345.562,1256.97 -238.075,679.626 C-130.587,102.279 -268.934,-486.22 -268.934,-486.22 L-351.598,-665.09 C-351.598,-665.09 -265.698,3.26277 -401.359,673.141 C-537.02,1343.02 -894.242,2014.43 -894.242,2014.43 L-698.882,1823.17 Z "
                    fill="#2b550f"
                    fillOpacity="1.00"
                    filter="url(#xcz2qYrl)"
                  />{" "}
                  <defs>
                    {" "}
                    <filter
                      id="cue4iYjr"
                      x="-19.78%"
                      y="-17.53%"
                      width="159.98%"
                      height="157.63%"
                      filterUnits="objectBoundingBox"
                    >
                      {" "}
                      <feOffset
                        dx="4.54"
                        dy="36.32"
                        in="SourceAlpha"
                        result="shadowOffsetOuter1"
                      />{" "}
                      <feGaussianBlur
                        stdDeviation="144.38"
                        in="shadowOffsetOuter1"
                        result="shadowBlurOuter1"
                      />{" "}
                      <feFlood floodColor="#000000" floodOpacity="0.21" />{" "}
                      <feComposite in2="shadowBlurOuter1" operator="in" />{" "}
                      <feMerge>
                        {" "}
                        <feMergeNode /> <feMergeNode in="SourceGraphic" />{" "}
                      </feMerge>{" "}
                    </filter>{" "}
                  </defs>{" "}
                  <path
                    d="M-1025.8,-1650.47 C-1025.8,-1650.47 -1047.59,-1447.08 -1020.35,-1203.73 C-1018.54,-1176.49 -1014.9,-1151.07 -1009.46,-1123.83 C-954.975,-766.069 -791.533,-359.28 -315.735,-321.143 C158.247,-359.28 323.505,-769.701 377.985,-1123.83 C383.434,-1151.07 385.25,-1178.31 388.882,-1203.73 C416.122,-1450.71 394.33,-1650.47 394.33,-1650.47 C394.33,-1650.47 170.959,-1619.6 -19.7233,-1443.44 C-39.6995,-1588.73 -206.774,-1746.72 -315.735,-1761.25 C-426.512,-1748.54 -593.586,-1592.36 -611.746,-1445.26 C-804.245,-1619.6 -1025.8,-1650.47 -1025.8,-1650.47 Z "
                    fill="#f7b8a8"
                    fillOpacity="1.00"
                    filter="url(#cue4iYjr)"
                  />{" "}
                  <defs>
                    {" "}
                    <filter
                      id="cjr2zEEz"
                      x="-19.11%"
                      y="-19.13%"
                      width="157.94%"
                      height="162.88%"
                      filterUnits="objectBoundingBox"
                    >
                      {" "}
                      <feOffset
                        dx="2.53"
                        dy="20.23"
                        in="SourceAlpha"
                        result="shadowOffsetOuter1"
                      />{" "}
                      <feGaussianBlur
                        stdDeviation="80.42"
                        in="shadowOffsetOuter1"
                        result="shadowBlurOuter1"
                      />{" "}
                      <feFlood floodColor="#000000" floodOpacity="0.21" />{" "}
                      <feComposite in2="shadowBlurOuter1" operator="in" />{" "}
                      <feMerge>
                        {" "}
                        <feMergeNode /> <feMergeNode in="SourceGraphic" />{" "}
                      </feMerge>{" "}
                    </filter>{" "}
                  </defs>{" "}
                  <path
                    d="M-270.381,873.638 C-231.373,758.471 -144.34,660.992 -26.4928,646.447 C97.4834,630.068 196.152,613.914 246.089,472.775 C193.802,494.423 145.644,416.009 67.0383,437.849 C101.599,400.469 151.14,402.012 248.105,408.069 C367.249,416.84 515.169,346.558 552.463,156.449 C424.106,280.977 250.513,168.296 5.92876,385.345 C-123.093,498.72 -192.904,628.107 -231.377,726.086 C-265.522,815.092 -273.635,880.621 -276.003,891.679 C-273.729,883.654 -272.592,879.641 -270.381,873.638 Z "
                    fill="#2b550f"
                    fillOpacity="1.00"
                    filter="url(#cjr2zEEz)"
                  />{" "}
                  <defs>
                    {" "}
                    <filter
                      id="oTVRZsSu"
                      x="-19.11%"
                      y="-19.13%"
                      width="157.94%"
                      height="162.88%"
                      filterUnits="objectBoundingBox"
                    >
                      {" "}
                      <feOffset
                        dx="2.53"
                        dy="20.23"
                        in="SourceAlpha"
                        result="shadowOffsetOuter1"
                      />{" "}
                      <feGaussianBlur
                        stdDeviation="80.42"
                        in="shadowOffsetOuter1"
                        result="shadowBlurOuter1"
                      />{" "}
                      <feFlood floodColor="#000000" floodOpacity="0.21" />{" "}
                      <feComposite in2="shadowBlurOuter1" operator="in" />{" "}
                      <feMerge>
                        {" "}
                        <feMergeNode /> <feMergeNode in="SourceGraphic" />{" "}
                      </feMerge>{" "}
                    </filter>{" "}
                  </defs>{" "}
                  <path
                    d="M-543.897,1523.22 C-504.889,1408.05 -417.855,1310.57 -300.008,1296.03 C-176.032,1279.65 -77.3633,1263.49 -27.4263,1122.36 C-79.7134,1144 -127.872,1065.59 -206.477,1087.43 C-171.916,1050.05 -122.376,1051.59 -25.4107,1057.65 C93.7339,1066.42 241.653,996.139 278.948,806.029 C150.591,930.557 -23.0021,817.876 -267.587,1034.93 C-396.608,1148.3 -466.42,1277.69 -504.892,1375.67 C-539.037,1464.67 -547.15,1530.2 -549.519,1541.26 C-547.245,1533.23 -546.108,1529.22 -543.897,1523.22 Z "
                    fill="#2b550f"
                    fillOpacity="1.00"
                    filter="url(#oTVRZsSu)"
                  />{" "}
                </g>{" "}
              </g>{" "}
            </svg>
          </div>
        </div>

        {/* <div className="block w-4/5 h-[2px] bg-pink my-10 mx-auto"></div> */}

        <div className="mt-10">
          <h1 className="block my-0 mx-auto w-4/5 mb-5 text-3xl text-white bg-pink text-center shadow-lg px-3">
            {pageStrings.services.plans.twelve_week.title}
          </h1>
          <div className="flex flex-row items-center justify-center text-left">
            <PlanCard plan={pageStrings.services.plans.twelve_week} />
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              width="200.00"
              height="200.00"
              viewBox="0 0 200.0 200.0"
            >
              {" "}
              <g
                id="document"
                transform="scale(0.048828125 0.048828125) translate(2048.0 2048.0)"
              >
                {" "}
                <g>
                  {" "}
                  <defs>
                    {" "}
                    <filter
                      id="phxBeTL9"
                      x="0.00%"
                      y="0.00%"
                      width="215.35%"
                      height="116.52%"
                      filterUnits="objectBoundingBox"
                    >
                      {" "}
                      <feOffset
                        dx="216.69"
                        dy="216.69"
                        in="SourceAlpha"
                        result="shadowOffsetOuter1"
                      />{" "}
                      <feGaussianBlur
                        stdDeviation="83.53"
                        in="shadowOffsetOuter1"
                        result="shadowBlurOuter1"
                      />{" "}
                      <feFlood floodColor="#000000" floodOpacity="0.15" />{" "}
                      <feComposite in2="shadowBlurOuter1" operator="in" />{" "}
                      <feMerge>
                        {" "}
                        <feMergeNode /> <feMergeNode in="SourceGraphic" />{" "}
                      </feMerge>{" "}
                    </filter>{" "}
                  </defs>{" "}
                  <path
                    d="M-236.66,1612.24 C-236.66,1612.24 -440.319,1083.07 -437.107,584.152 C-433.895,85.2314 -223.813,-383.444 -223.813,-383.444 L-126.079,-519.361 C-126.079,-519.361 -305.256,24.3665 -299.85,605.01 C-294.445,1185.65 -104.457,1803.21 -104.457,1803.21 L-236.66,1612.24 Z "
                    fill="#2c5610"
                    fillOpacity="1.00"
                    filter="url(#phxBeTL9)"
                  />{" "}
                  <defs>
                    {" "}
                    <filter
                      id="1MpGrkWq"
                      x="0.00%"
                      y="0.00%"
                      width="104.93%"
                      height="104.93%"
                      filterUnits="objectBoundingBox"
                    >
                      {" "}
                      <feOffset
                        dx="9.26"
                        dy="9.26"
                        in="SourceAlpha"
                        result="shadowOffsetOuter1"
                      />{" "}
                      <feGaussianBlur
                        stdDeviation="3.57"
                        in="shadowOffsetOuter1"
                        result="shadowBlurOuter1"
                      />{" "}
                      <feFlood floodColor="#000000" floodOpacity="0.15" />{" "}
                      <feComposite in2="shadowBlurOuter1" operator="in" />{" "}
                      <feMerge>
                        {" "}
                        <feMergeNode /> <feMergeNode in="SourceGraphic" />{" "}
                      </feMerge>{" "}
                    </filter>{" "}
                  </defs>{" "}
                  <path
                    d="M-78.3651,-741.667 C-170.292,-741.667 -244.709,-816.084 -244.709,-908.011 C-244.709,-999.938 -170.292,-1074.36 -78.3651,-1074.36 C13.5618,-1074.36 87.9788,-999.938 87.9788,-908.011 C87.9788,-816.084 13.5618,-741.667 -78.3651,-741.667 Z "
                    fill="#b7609e"
                    fillOpacity="1.00"
                    filter="url(#1MpGrkWq)"
                  />{" "}
                  <defs>
                    {" "}
                    <filter
                      id="RVRKnEau"
                      x="0.00%"
                      y="0.00%"
                      width="105.77%"
                      height="105.78%"
                      filterUnits="objectBoundingBox"
                    >
                      {" "}
                      <feOffset
                        dx="67.69"
                        dy="67.69"
                        in="SourceAlpha"
                        result="shadowOffsetOuter1"
                      />{" "}
                      <feGaussianBlur
                        stdDeviation="26.09"
                        in="shadowOffsetOuter1"
                        result="shadowBlurOuter1"
                      />{" "}
                      <feFlood floodColor="#000000" floodOpacity="0.15" />{" "}
                      <feComposite in2="shadowBlurOuter1" operator="in" />{" "}
                      <feMerge>
                        {" "}
                        <feMergeNode /> <feMergeNode in="SourceGraphic" />{" "}
                      </feMerge>{" "}
                    </filter>{" "}
                  </defs>{" "}
                  <path
                    d="M131.127,-1578.73 C121.729,-1509.89 69.5787,-1307.05 14.2574,-1144.16 C123.283,-1278.25 270.764,-1430.41 326.095,-1470.9 C427.256,-1549.31 611.811,-1668.16 704.227,-1552.95 C793.624,-1439.46 634.264,-1284.09 535.48,-1206.32 C480.792,-1163.45 299.057,-1053.02 142.858,-980.098 C316.236,-999.019 526.934,-1002.55 593.406,-992.509 C719.668,-978.265 935.024,-926.957 915.139,-783.867 C895.254,-640.776 675.498,-642.441 549.236,-656.685 C480.388,-666.083 277.555,-718.233 114.664,-773.554 C248.754,-664.529 400.912,-517.048 441.404,-461.716 C519.812,-360.556 638.664,-176.001 523.448,-83.5845 C409.964,5.81227 254.587,-153.547 176.823,-252.332 C133.956,-307.02 23.5184,-488.755 -49.4002,-644.954 C-33.4981,-473.308 -29.9663,-262.609 -39.3644,-193.762 C-55.984,-66.8562 -104.916,147.856 -248.007,127.971 C-391.097,108.086 -389.433,-111.67 -375.189,-237.932 C-365.791,-306.78 -313.641,-509.613 -258.319,-672.505 C-367.345,-538.415 -514.826,-386.256 -570.157,-345.765 C-671.318,-267.357 -855.873,-148.505 -948.289,-263.72 C-1037.69,-377.204 -878.326,-532.581 -779.542,-610.345 C-724.854,-653.212 -543.119,-763.65 -386.92,-836.568 C-558.566,-820.666 -769.264,-817.134 -838.112,-826.533 C-965.017,-843.152 -1179.73,-892.084 -1159.84,-1035.17 C-1139.96,-1178.27 -920.203,-1176.6 -798.693,-1161.07 C-729.845,-1151.67 -527.012,-1099.52 -364.12,-1044.2 C-498.21,-1153.23 -650.369,-1300.71 -690.86,-1356.04 C-763.873,-1456.11 -882.725,-1640.67 -769.885,-1732.44 C-656.402,-1821.83 -501.025,-1662.48 -423.261,-1563.69 C-380.394,-1509 -269.956,-1327.27 -197.037,-1171.07 C-212.939,-1342.71 -216.471,-1553.41 -207.073,-1622.26 C-190.454,-1749.17 -141.521,-1963.88 1.56915,-1943.99 C151.143,-1928.41 147.103,-1708.02 131.127,-1578.73 Z M-86.3065,-1035.31 C-162.281,-1042.78 -229.69,-1009.22 -241.909,-931.957 C-257.79,-858.802 -204.181,-773.874 -127.562,-764.031 C-50.9437,-754.188 15.8686,-818.19 13.8332,-891.59 C19.5684,-964.546 -12.0637,-1024.83 -86.3065,-1035.31 Z "
                    fill="#f4eaf2"
                    fillOpacity="1.00"
                    filter="url(#RVRKnEau)"
                  />{" "}
                  <defs>
                    {" "}
                    <filter
                      id="1it4DlpJ"
                      x="0.00%"
                      y="0.00%"
                      width="105.63%"
                      height="107.21%"
                      filterUnits="objectBoundingBox"
                    >
                      {" "}
                      <feOffset
                        dx="26.20"
                        dy="26.20"
                        in="SourceAlpha"
                        result="shadowOffsetOuter1"
                      />{" "}
                      <feGaussianBlur
                        stdDeviation="10.10"
                        in="shadowOffsetOuter1"
                        result="shadowBlurOuter1"
                      />{" "}
                      <feFlood floodColor="#000000" floodOpacity="0.15" />{" "}
                      <feComposite in2="shadowBlurOuter1" operator="in" />{" "}
                      <feMerge>
                        {" "}
                        <feMergeNode /> <feMergeNode in="SourceGraphic" />{" "}
                      </feMerge>{" "}
                    </filter>{" "}
                  </defs>{" "}
                  <path
                    d="M-1161.13,361.175 C-688.751,224.235 -381.991,438.262 -337.102,871.865 C-519.587,660.514 -565.025,557.23 -863.762,485.647 C-623.929,596.111 -512.866,760.379 -379.808,963.781 C-436.225,964.143 -517.243,940.538 -582.568,931.115 C-718.475,910.468 -873.121,856.81 -940.88,703.747 C-1031.76,497.18 -1142.98,377.753 -1161.13,361.175 Z "
                    fill="#2c5610"
                    fillOpacity="1.00"
                    filter="url(#1it4DlpJ)"
                  />{" "}
                </g>{" "}
              </g>{" "}
            </svg>
          </div>
        </div>

        {/* <div className="block w-4/5 h-[2px] bg-pink my-10 mx-auto"></div> */}

        <div className="mt-10">
        <h1 className="block my-0 mx-auto w-4/5 mb-5 text-3xl text-white bg-pink text-center shadow-lg px-3">{pageStrings.services.plans.share.title}</h1>
          <div className="flex flex-row items-center justify-center text-left">
            <PlanCard plan={pageStrings.services.plans.share} />
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              width="200.00"
              height="200.00"
              viewBox="0 0 200.0 200.0"
            >
              {" "}
              <g
                id="document"
                transform="scale(0.048828125 0.048828125) translate(2048.0 2048.0)"
              >
                {" "}
                <g>
                  {" "}
                  <defs>
                    {" "}
                    <filter
                      id="lblmUxUK"
                      x="-600.47%"
                      y="-34.27%"
                      width="1901.42%"
                      height="206.19%"
                      filterUnits="objectBoundingBox"
                    >
                      {" "}
                      <feOffset
                        dx="0.00"
                        dy="39.60"
                        in="SourceAlpha"
                        result="shadowOffsetOuter1"
                      />{" "}
                      <feGaussianBlur
                        stdDeviation="419.76"
                        in="shadowOffsetOuter1"
                        result="shadowBlurOuter1"
                      />{" "}
                      <feFlood floodColor="#000000" floodOpacity="0.50" />{" "}
                      <feComposite in2="shadowBlurOuter1" operator="in" />{" "}
                      <feMerge>
                        {" "}
                        <feMergeNode /> <feMergeNode in="SourceGraphic" />{" "}
                      </feMerge>{" "}
                    </filter>{" "}
                  </defs>{" "}
                  <path
                    d="M-40.0259,1590.04 L-0.264091,-415.37 L99.7836,-550.646 L90.2636,1783.74 L-40.0259,1590.04 Z "
                    fill="#2c5610"
                    fillOpacity="1.00"
                    filter="url(#lblmUxUK)"
                  />{" "}
                  <g>
                    {" "}
                    <defs>
                      {" "}
                      <filter
                        id="wYZiXjrF"
                        x="-10.73%"
                        y="-10.22%"
                        width="132.18%"
                        height="131.67%"
                        filterUnits="objectBoundingBox"
                      >
                        {" "}
                        <feOffset
                          dx="0.00"
                          dy="2.25"
                          in="SourceAlpha"
                          result="shadowOffsetOuter1"
                        />{" "}
                        <feGaussianBlur
                          stdDeviation="23.84"
                          in="shadowOffsetOuter1"
                          result="shadowBlurOuter1"
                        />{" "}
                        <feFlood floodColor="#000000" floodOpacity="0.50" />{" "}
                        <feComposite in2="shadowBlurOuter1" operator="in" />{" "}
                        <feMerge>
                          {" "}
                          <feMergeNode /> <feMergeNode in="SourceGraphic" />{" "}
                        </feMerge>{" "}
                      </filter>{" "}
                    </defs>{" "}
                    <path
                      d="M121.317,-730.865 C227.642,-792.252 264.021,-928.019 202.634,-1034.34 C141.247,-1140.67 5.48067,-1177.05 -100.844,-1115.66 C-207.169,-1054.27 -243.548,-918.507 -182.161,-812.182 C-120.774,-705.857 14.9923,-669.479 121.317,-730.865 Z "
                      fill="#d191ef"
                      fillOpacity="1.00"
                      filter="url(#wYZiXjrF)"
                    />{" "}
                    <defs>
                      {" "}
                      <filter
                        id="oOKpjBcN"
                        x="-13.29%"
                        y="-12.53%"
                        width="139.86%"
                        height="138.82%"
                        filterUnits="objectBoundingBox"
                      >
                        {" "}
                        <feOffset
                          dx="0.00"
                          dy="10.64"
                          in="SourceAlpha"
                          result="shadowOffsetOuter1"
                        />{" "}
                        <feGaussianBlur
                          stdDeviation="112.81"
                          in="shadowOffsetOuter1"
                          result="shadowBlurOuter1"
                        />{" "}
                        <feFlood floodColor="#000000" floodOpacity="0.50" />{" "}
                        <feComposite in2="shadowBlurOuter1" operator="in" />{" "}
                        <feMerge>
                          {" "}
                          <feMergeNode /> <feMergeNode in="SourceGraphic" />{" "}
                        </feMerge>{" "}
                      </filter>{" "}
                    </defs>{" "}
                    <path
                      d="M-816.467,-1124.7 C-816.467,-1124.7 -681.138,-1091.57 -548.737,-919.038 C-492.25,-845.257 -423.034,-811.308 -358.879,-793.193 C-658.895,-492.155 -393.44,-144.144 -393.44,-144.144 C-393.44,-144.144 -325.865,-242.419 -120.025,-335.971 C-33.51,-376.787 28.6797,-450.74 65.2416,-508.203 C235.035,-188.263 653.905,-287.543 653.905,-287.543 C653.905,-287.543 579.131,-415.845 558.875,-617.936 C550.38,-711.636 522.297,-782.481 479.851,-834.715 C849.587,-912.28 881.878,-1335.73 881.878,-1335.73 C881.878,-1335.73 737.413,-1298.99 538.745,-1339.62 C445.697,-1355.94 373.218,-1349.08 308.74,-1327.04 C344.138,-1687.97 -38.022,-1860.49 -38.022,-1860.49 C-38.022,-1860.49 -37.361,-1746.54 -149.332,-1570.56 C-224.741,-1452.04 -211.186,-1370.26 -212.161,-1305.29 C-536.204,-1438.31 -816.467,-1124.7 -816.467,-1124.7 Z M116.462,-1040.7 C175.721,-1002.99 205.599,-931.008 165.61,-868.157 C125.62,-805.306 43.1859,-766.939 -16.0733,-804.644 C-75.3325,-842.348 -112.721,-934.25 -71.589,-998.897 C-34.5376,-1061.09 57.2027,-1078.4 116.462,-1040.7 Z "
                      fill="#f26b3a"
                      fillOpacity="1.00"
                      filter="url(#oOKpjBcN)"
                    />{" "}
                  </g>{" "}
                  <defs>
                    {" "}
                    <filter
                      id="w5Uxl0yx"
                      x="-12.13%"
                      y="-14.88%"
                      width="136.39%"
                      height="146.12%"
                      filterUnits="objectBoundingBox"
                    >
                      {" "}
                      <feOffset
                        dx="0.00"
                        dy="5.68"
                        in="SourceAlpha"
                        result="shadowOffsetOuter1"
                      />{" "}
                      <feGaussianBlur
                        stdDeviation="60.18"
                        in="shadowOffsetOuter1"
                        result="shadowBlurOuter1"
                      />{" "}
                      <feFlood floodColor="#000000" floodOpacity="0.50" />{" "}
                      <feComposite in2="shadowBlurOuter1" operator="in" />{" "}
                      <feMerge>
                        {" "}
                        <feMergeNode /> <feMergeNode in="SourceGraphic" />{" "}
                      </feMerge>{" "}
                    </filter>{" "}
                  </defs>{" "}
                  <path
                    d="M798.034,842.52 C848.719,803.981 918.639,711.598 1022.2,763.102 C879.665,575.813 546.559,596.68 397.615,754.922 C415.842,705.507 450.976,673.91 467.593,626.457 C322.898,673.884 191.683,759.309 167.039,934.184 C172.784,893.573 140.683,860.653 155.091,787.081 C49.6229,969.186 34.4908,1138.07 29.8789,1296.55 C167.259,1086.77 226.675,927.956 520.529,900.488 C312.929,942.92 96.032,1169.54 82.6997,1397.06 C242.248,1309.93 442.933,1369.55 597.266,1192.74 C543.878,1156.14 314.535,1212.26 262.307,1165.45 C309.309,1173.81 553.092,1136.12 615.698,1127.07 C602.413,1124.05 667.721,944.452 798.034,842.52 Z "
                    fill="#2c5610"
                    fillOpacity="1.00"
                    filter="url(#w5Uxl0yx)"
                  />{" "}
                  <defs>
                    {" "}
                    <filter
                      id="Jk35ERnk"
                      x="-12.13%"
                      y="-14.88%"
                      width="136.39%"
                      height="146.12%"
                      filterUnits="objectBoundingBox"
                    >
                      {" "}
                      <feOffset
                        dx="0.00"
                        dy="5.68"
                        in="SourceAlpha"
                        result="shadowOffsetOuter1"
                      />{" "}
                      <feGaussianBlur
                        stdDeviation="60.18"
                        in="shadowOffsetOuter1"
                        result="shadowBlurOuter1"
                      />{" "}
                      <feFlood floodColor="#000000" floodOpacity="0.50" />{" "}
                      <feComposite in2="shadowBlurOuter1" operator="in" />{" "}
                      <feMerge>
                        {" "}
                        <feMergeNode /> <feMergeNode in="SourceGraphic" />{" "}
                      </feMerge>{" "}
                    </filter>{" "}
                  </defs>{" "}
                  <path
                    d="M-668.371,71.9194 C-719.056,33.3807 -788.977,-59.0019 -892.536,-7.49819 C-750.003,-194.787 -416.896,-173.92 -267.952,-15.6779 C-286.18,-65.0934 -321.313,-96.6904 -337.93,-144.144 C-193.236,-96.7166 -62.0207,-11.2913 -37.376,163.583 C-43.1214,122.972 -11.0207,90.0531 -25.4287,16.4807 C80.0396,198.586 95.1717,367.474 99.7836,525.947 C-37.5965,316.169 -97.0126,157.355 -390.867,129.888 C-183.267,172.32 33.6305,398.94 46.9628,626.457 C-112.586,539.326 -313.27,598.952 -467.603,422.141 C-414.216,385.544 -184.872,441.66 -132.645,394.847 C-179.647,403.21 -423.429,365.516 -486.035,356.471 C-472.75,353.448 -538.059,173.851 -668.371,71.9194 Z "
                    fill="#2c5610"
                    fillOpacity="1.00"
                    filter="url(#Jk35ERnk)"
                  />{" "}
                </g>{" "}
              </g>{" "}
            </svg>
          </div>
        </div>

        {/* <div className="block w-4/5 h-[2px] bg-pink my-10 mx-auto"></div> */}
      </div>
    </div>
  );
};

export default Programs;
