import React from 'react';
import styles from '@/components/elements/Greeter/greeter.module.scss';

const Greeter = ({username} : {username : string}) => {
    const date = new Date();
    const time = date.getHours();
    return(
        <>
            <h2 className={styles.greeter}>                
                {
                    time >= 0 && time < 12
                    &&
                    "Good Morning"
                }
                {
                    time >= 12 && time < 16
                    &&
                    "Good Afternoon"
                }
                {
                    time >= 16 && time <= 23
                    &&
                    "Good Evening"
                }
                , {username}
            </h2>
        </>
    )
}

export default Greeter