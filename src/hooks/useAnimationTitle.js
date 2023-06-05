export const useAnimationTitle = () => {
    const animationTitle = {
        initial:{
            x: "-50%",
            opacity: 0
        },
        animate:{
            x: "0px",
            opacity: 1
        },
        transition: {
            duration: 1
        }
    }

    return [animationTitle]
}

export const useAnimationTitleOpacity = (sec=1) => {
    const animationTitle ={
        initial:{
            // x: "-50%",
            opacity: 0
        },
        animate:{
            // x: "0px",
            opacity: 1
        },
        transition: {
            duration: sec
        }
    }
    return [animationTitle]
}