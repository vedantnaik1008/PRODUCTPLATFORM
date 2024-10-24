import { useEffect, useState } from "react";


const useIntervalAnimation = ({delay, data}) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        let timeoutId;

        const updateIndex = () => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
        };

        timeoutId = setInterval(updateIndex, delay);

        return () => {
            clearInterval(timeoutId);
        };
    }, []);
  return {currentIndex, setCurrentIndex}
}

export default useIntervalAnimation
