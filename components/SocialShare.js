import Link from 'next/link';
import React from 'react';
import styles from './SocialShare.module.scss';

function SocialShare({ title, subtitle, description, url, img }) {
  const pinterest = false;
  return (
    <div className={styles.container}>
      <Link href={`http://twitter.com/share?text=${description}&url=${url}&hashtags=mujeres,riogrande,centenario`}>
        <a target="_blank" rel="noreferer" className={styles.link} href={`http://twitter.com/share?text=${description}&url=${url}&hashtags=mujeres,riogrande,centenario`}>
          <svg viewBox="0 0 23 20" fill="none">
            <path
              d="M22 1.29543C21.0647 1.97303 20.5174 2.20594 19.4214 2.54489C18.8331 1.85023 18.0513 1.35787 17.1818 1.1344C16.3122 0.910937 15.3967 0.967149 14.5592 1.29543C13.7218 1.62372 13.0027 2.20824 12.4992 2.96994C11.9957 3.73163 11.7322 4.63376 11.7442 5.55431V6.55744C10.0277 6.60315 8.32683 6.21218 6.79308 5.41933C5.25933 4.62648 3.94031 3.45638 2.95349 2.01323C2.95349 2.01323 -0.953488 11.0415 7.83721 15.054C5.82563 16.4564 3.42932 17.1595 1 17.0603C9.7907 22.076 20.5349 17.0603 20.5349 5.52421C20.534 5.24479 20.5078 4.96606 20.4567 4.69161C21.4536 3.68194 21.6687 2.69252 22 1.29543Z"
              stroke="var(--color-gray)"
              strokeWidth="1.8"
            />
          </svg>
        </a>
      </Link>
      <Link href={`https://www.facebook.com/sharer/sharer.php?u=${url}`}>
        <a target="_blank" rel="noreferer" className={styles.link} href={`https://www.facebook.com/sharer/sharer.php?u=${url}`}>
          <svg viewBox="0 0 20 20">
            <path
              d="M10 0C4.48667 0 0 4.48667 0 10C0 15.5133 4.48667 20 10 20C15.5133 20 20 15.5133 20 10C20 4.48667 15.5133 0 10 0ZM10 1.66667C14.6125 1.66667 18.3333 5.3875 18.3333 10C18.3354 11.995 17.62 13.9242 16.3178 15.4355C15.0156 16.9468 13.2133 17.9396 11.24 18.2325V12.43H13.6133L13.9858 10.0192H11.24V8.7025C11.24 7.7025 11.5692 6.81333 12.505 6.81333H14.0092V4.71C13.745 4.67417 13.1858 4.59667 12.1292 4.59667C9.9225 4.59667 8.62917 5.76167 8.62917 8.41667V10.0192H6.36083V12.43H8.62917V18.2117C6.68313 17.8914 4.91436 16.8896 3.63891 15.3853C2.36346 13.881 1.66441 11.9722 1.66667 10C1.66667 5.3875 5.3875 1.66667 10 1.66667Z"
              fill="var(--color-gray)"
            />
          </svg>
        </a>
      </Link>
      <Link href={`https://wa.me/?text=${url}`}>
        <a target="_blank" rel="noreferer" href={`https://wa.me/?text=${url}`} className={styles.link}>
          <svg viewBox="0 0 20 20">
            <path
              d="M17.0781 2.90755C16.157 1.98215 15.0602 1.24849 13.8515 0.749316C12.6427 0.250143 11.3463 -0.00455533 10.0377 6.1663e-05C4.55424 6.1663e-05 0.0853842 4.44755 0.0803616 9.90753C0.0803616 11.6563 0.53993 13.3575 1.40758 14.8638L0 20L5.27875 18.6225C6.73908 19.4136 8.3751 19.8283 10.0377 19.8288H10.0427C15.5274 19.8288 19.995 15.3813 20 9.91628C20.0012 8.61384 19.7436 7.32402 19.2419 6.12114C18.7402 4.91826 18.0044 3.82609 17.0768 2.90755H17.0781ZM10.0377 18.1513C8.55474 18.1518 7.09907 17.7545 5.8237 17.0013L5.52235 16.8213L2.39076 17.6388L3.22702 14.5975L3.03114 14.2838C2.20217 12.9717 1.76375 11.4526 1.7667 9.90253C1.7667 5.37005 5.47966 1.67256 10.0427 1.67256C11.1298 1.67062 12.2065 1.8829 13.2107 2.29717C14.215 2.71144 15.1269 3.3195 15.894 4.0863C16.6638 4.85011 17.274 5.75808 17.6895 6.75783C18.105 7.75758 18.3176 8.82934 18.3149 9.91128C18.3099 14.46 14.5969 18.1513 10.0377 18.1513V18.1513ZM14.5768 11.9838C14.3295 11.86 13.1077 11.2613 12.8779 11.1763C12.6494 11.095 12.4824 11.0525 12.3192 11.3C12.1522 11.5463 11.675 12.1075 11.5319 12.2688C11.3887 12.435 11.2406 12.4538 10.992 12.3313C10.7446 12.2063 9.94224 11.9463 8.99297 11.1C8.25213 10.4438 7.75615 9.63128 7.60798 9.38503C7.46484 9.13753 7.59417 9.00503 7.71848 8.88128C7.82772 8.77128 7.96584 8.59128 8.09015 8.44879C8.21572 8.30629 8.25715 8.20129 8.33877 8.03629C8.42039 7.86879 8.38146 7.72629 8.31994 7.60254C8.25715 7.47879 7.76117 6.25754 7.55148 5.76504C7.35058 5.2788 7.1459 5.34629 6.99271 5.34004C6.84957 5.33129 6.68257 5.33129 6.51557 5.33129C6.38946 5.33442 6.26535 5.36345 6.15105 5.41658C6.03674 5.46972 5.9347 5.54579 5.85133 5.64004C5.6228 5.88754 4.98368 6.48629 4.98368 7.70754C4.98368 8.92878 5.87519 10.1025 6.00075 10.2688C6.12381 10.435 7.75113 12.9338 10.2486 14.0088C10.8388 14.265 11.3034 14.4163 11.6662 14.5313C12.2627 14.7213 12.8014 14.6925 13.2308 14.6313C13.7079 14.5588 14.7012 14.0313 14.9108 13.4525C15.1168 12.8725 15.1168 12.3775 15.054 12.2738C14.9925 12.1688 14.8255 12.1075 14.5768 11.9838V11.9838Z"
              fill="var(--color-gray)"
            />
          </svg>
        </a>
      </Link>
      {pinterest && (
        <Link href={`https://www.pinterest.com/pin/create/button/?url=${url}`}>
          <a target="_blank" rel="noreferer" href={`https://www.pinterest.com/pin/create/button/?url=${url}`}>
            <svg className={styles.link} viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M6.78571 18.6786L10.75 9.42857M6.47386 13.3929C5.82255 12.6668 5.46294 11.7254 5.46429 10.75V10.0893C5.46429 8.86266 5.95156 7.68627 6.81892 6.81892C7.68627 5.95156 8.86266 5.46429 10.0893 5.46429H11.4107C12.6373 5.46429 13.8137 5.95156 14.6811 6.81892C15.5484 7.68627 16.0357 8.86266 16.0357 10.0893V10.75C16.0357 11.8014 15.6181 12.8097 14.8746 13.5532C14.1312 14.2966 13.1228 14.7143 12.0714 14.7143C11.4943 14.7142 10.9318 14.5326 10.4637 14.1951C9.99552 13.8576 9.64541 13.3814 9.46293 12.8339L9.42857 12.7321M10.75 20C9.53527 20 8.33244 19.7607 7.21018 19.2959C6.08792 18.831 5.0682 18.1497 4.20926 17.2907C3.35032 16.4318 2.66897 15.4121 2.20411 14.2898C1.73926 13.1676 1.5 11.9647 1.5 10.75C1.5 9.53527 1.73926 8.33244 2.20411 7.21018C2.66897 6.08792 3.35032 5.0682 4.20926 4.20926C5.0682 3.35032 6.08792 2.66897 7.21018 2.20411C8.33244 1.73926 9.53527 1.5 10.75 1.5C13.2033 1.5 15.556 2.47455 17.2907 4.20926C19.0254 5.94397 20 8.29675 20 10.75C20 13.2033 19.0254 15.556 17.2907 17.2907C15.556 19.0254 13.2033 20 10.75 20Z"
                stroke="var(--color-gray)"
                strokeWidth="1.5"
              />
            </svg>
          </a>
        </Link>
      )}
    </div>
  );
}

export default SocialShare;
