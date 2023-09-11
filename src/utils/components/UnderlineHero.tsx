import { Box } from '@chakra-ui/react'
import React from 'react'

export default function UnderlineHero() {
    return (
        <Box width={{ base: "80%", md: '100%', lg: '80%' }} mx={{ base: "auto", lg: "0" }}>
            <svg width="100%" height="39" viewBox="0 0 479 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.3926 19.5995C14.1428 19.5995 18.0717 19.4005 21.822 19.2016C23.4293 19.2016 24.858 19.0026 26.4652 19.0026C33.2514 18.6047 40.0377 18.2068 46.8239 17.8089C55.0388 17.411 63.0752 16.8141 71.2901 16.4162C82.8981 15.6204 94.5062 15.0236 106.114 14.2277C108.793 14.0288 111.472 14.0288 114.151 13.8298C120.937 13.4319 127.723 13.034 134.509 12.8351C141.295 12.4372 148.082 12.0393 154.868 11.8403C157.547 11.6414 160.225 11.4424 162.904 11.4424C173.619 11.0445 184.513 10.6466 195.228 10.2487C201.836 10.0497 208.443 9.85079 215.23 9.45288C217.908 9.45288 220.409 9.25393 223.087 9.25393C233.445 9.05497 243.982 8.85602 254.34 8.65707C264.698 8.45811 274.877 8.25916 285.235 8.06021C287.914 8.06021 290.593 8.06021 293.45 8.06021C300.236 8.06021 306.844 8.06021 313.63 8.06021C324.167 8.06021 334.525 8.06021 345.061 7.86126C348.454 7.86126 351.847 7.86126 355.24 7.86126C362.384 7.86126 369.527 7.86126 376.671 7.86126C377.206 7.86126 377.921 7.86126 378.457 7.86126C362.384 8.06021 346.133 8.25916 330.06 8.65707C323.274 8.85602 316.666 8.85602 309.88 9.05497C307.022 9.05497 303.987 9.05497 301.129 9.25393C291.307 9.45288 281.663 9.85078 271.841 10.0497C260.59 10.4476 249.339 10.6466 238.089 11.0445C236.124 11.0445 234.338 11.2435 232.374 11.2435C226.302 11.6414 220.409 11.8403 214.337 12.2382C202.193 12.8351 190.049 13.4319 177.905 14.0288C176.12 14.0288 174.334 14.2277 172.548 14.4267C166.655 14.8246 160.583 15.4215 154.689 15.8194C143.974 16.6152 133.438 17.411 122.723 18.2068C119.865 18.4058 116.829 18.8037 113.972 19.0026C107.186 19.5995 100.399 20.1963 93.6132 20.9921C85.0411 21.788 76.2905 22.5838 67.7184 23.3796C55.7532 24.5733 43.6094 25.767 31.6442 26.9607C28.7868 27.1597 25.9295 27.5576 22.8935 27.7565C17.7145 28.3534 12.5356 28.9503 7.3566 29.5471C6.82085 29.5471 6.28509 29.945 6.28509 30.7408C6.28509 31.3377 6.82085 31.9346 7.3566 31.9346C9.32104 31.9346 11.1069 32.1335 13.0713 32.1335C12.7142 33.1283 12.5356 33.7251 12.5356 34.322C12.5356 36.5105 14.1428 38.5 16.2859 38.5C31.1084 37.5052 45.7524 36.3115 60.575 35.5157C73.4331 34.9188 86.2912 34.123 99.1494 33.5262C113.258 32.7304 127.544 31.9346 141.653 31.3377C146.117 31.1387 150.582 30.9398 155.047 30.5419C156.297 30.5419 157.547 30.3429 158.975 30.3429C181.834 29.7461 204.693 28.9503 227.552 28.3534C239.696 27.9555 252.018 27.5576 264.162 27.3586C268.627 27.1597 272.913 27.1597 277.377 26.9607C300.772 26.5628 324.167 26.1649 347.561 25.767C357.562 25.5681 367.563 25.3691 377.564 25.1702C386.136 24.9712 394.708 24.9712 403.28 24.5733C410.423 24.3743 417.388 23.9764 424.531 23.7775C428.103 23.5785 431.675 23.5785 435.068 23.3796C443.104 22.7827 451.141 22.1859 459.177 21.589C458.641 22.3848 458.641 23.5785 458.82 24.3743C458.998 25.3691 459.534 26.1649 460.427 26.5628C461.141 26.9607 462.213 27.3586 462.927 26.9607C464.713 26.1649 466.499 25.3691 468.106 24.5733C468.106 24.5733 468.106 24.5733 467.928 24.5733C468.106 24.5733 468.106 24.3743 468.285 24.3743C468.463 24.3743 468.642 24.1754 468.642 24.1754H468.463C469.356 23.7775 470.249 23.3796 471.321 22.7827C472.214 22.3848 473.285 21.788 474.178 21.3901C475.25 20.7932 476.143 20.1963 477.214 19.5995C478.286 19.0026 479 17.411 479 16.0183C479 15.2225 478.821 14.6257 478.464 13.8298C478.107 13.034 477.214 12.0393 476.321 11.8403C475.428 11.6414 474.535 11.4424 473.642 11.4424C473.464 11.4424 473.285 11.4424 473.107 11.4424C472.571 11.4424 471.857 11.4424 471.321 11.6414C469.892 11.8403 468.642 12.0393 467.213 12.0393C466.142 12.0393 465.07 12.2382 463.82 12.2382C460.784 12.4372 457.927 12.6361 454.891 13.034C454.177 13.034 453.284 13.233 452.569 13.233C452.927 12.8351 453.105 12.4372 453.105 12.0393C453.284 11.6414 453.284 11.2435 453.284 10.8455C453.284 10.6466 453.284 10.2487 453.462 10.0497C453.462 9.65183 453.462 9.25393 453.284 9.05497C453.284 9.05497 453.462 9.05497 453.462 8.85602C453.998 8.45811 454.534 8.06021 454.891 7.2644C455.248 6.66754 455.427 5.87173 455.427 5.07592C455.427 4.2801 455.248 3.68325 454.891 2.88743C454.712 2.68848 454.534 2.29058 454.355 2.09162C453.819 1.49476 453.284 1.29581 452.748 1.09686C451.676 0.698953 450.426 0.5 449.176 0.5C448.105 0.5 447.212 0.5 446.14 0.5C444.712 0.5 443.283 0.5 441.854 0.5C439.89 0.5 437.747 0.5 435.782 0.5C430.425 0.5 425.067 0.5 419.71 0.5C414.709 0.5 409.53 0.5 404.53 0.5C399.887 0.5 395.422 0.5 390.779 0.5C372.385 0.5 354.169 0.698953 335.775 0.897906C322.024 1.09686 308.273 1.29581 294.521 1.29581C288.45 1.29581 282.199 1.49476 276.127 1.69372C262.376 2.09162 248.625 2.29058 234.874 2.68848C230.945 2.68848 227.016 2.88743 223.087 2.88743C220.766 2.88743 218.623 3.08639 216.301 3.08639C202.729 3.68325 189.156 4.2801 175.584 4.87696C171.476 5.07592 167.369 5.27487 163.083 5.47382C160.761 5.47382 158.44 5.67277 156.118 5.87173C142.546 6.66754 129.152 7.46335 115.579 8.25916C108.614 8.65707 101.65 9.05497 94.6847 9.65183C82.7196 10.4476 70.7543 11.2435 58.9677 12.2382C48.6098 13.034 38.2518 13.6309 27.8939 14.2277C26.2866 14.4267 24.6794 14.4267 22.8935 14.6257C20.2147 14.8246 17.536 14.8246 14.8572 15.0236C12.5356 15.8194 10.0354 15.8194 7.71377 15.8194C7.53519 15.0236 6.82085 14.4267 6.28509 14.6257C4.67783 14.6257 3.24915 14.8246 1.64188 15.0236C0.927538 15.2225 0.213198 15.6204 0.0346124 16.4162C-0.143973 17.411 0.391783 18.4058 1.10612 18.6047C1.82046 18.8037 2.5348 19.0026 3.24915 19.2016C3.96349 19.4005 4.49924 19.4005 5.21358 19.4005C6.99943 19.5995 8.6067 19.5995 10.3926 19.5995ZM428.282 13.233C430.425 13.233 432.746 13.233 434.889 13.233C435.068 13.8298 435.425 14.2277 435.782 14.6257C434.889 14.6257 433.997 14.8246 433.282 14.8246C431.675 14.8246 430.068 15.0236 428.46 15.0236C421.317 15.2225 414.352 15.6204 407.209 15.8194C403.994 16.0183 400.78 16.2173 397.565 16.2173C392.565 16.2173 387.386 16.4162 382.385 16.4162C370.777 16.6152 359.348 16.8141 347.74 17.0131C325.238 17.411 302.915 17.8089 280.413 18.2068C264.341 18.4058 248.268 19.0026 232.195 19.5995C208.086 20.3953 183.799 20.9921 159.69 21.788C154.868 21.9869 150.046 22.1859 145.224 22.5838C131.473 23.3796 117.722 23.9764 103.971 24.7722C90.5773 25.5681 77.0048 26.1649 63.6109 26.9607C62.3608 26.9607 61.1107 27.1597 59.8606 27.1597C63.4323 26.7618 67.1826 26.5628 70.7543 26.1649C83.4339 25.1702 96.1134 23.9764 108.793 22.9817C113.258 22.5838 117.722 22.1859 122.008 21.788C124.33 21.589 126.651 21.3901 128.794 21.3901C142.188 20.5942 155.404 19.5995 168.619 18.8037C171.119 18.6047 173.798 18.4058 176.298 18.2068C180.048 18.0079 183.799 17.8089 187.37 17.8089C200.943 17.212 214.515 16.6152 228.088 16.0183C231.124 15.8194 234.16 15.8194 237.017 15.6204C237.731 15.6204 238.624 15.6204 239.339 15.6204C241.482 15.6204 243.625 15.6204 245.589 15.4215C259.162 15.0236 272.913 14.8246 286.485 14.4267C292.736 14.2277 298.986 14.0288 305.237 14.0288C325.417 13.8298 345.775 13.6309 365.956 13.4319C387.029 13.4319 407.745 13.233 428.282 13.233Z" fill="white" />
            </svg>
        </Box>
    )
}