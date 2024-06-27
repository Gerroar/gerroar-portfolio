export const svgVariants = {
    show: {
        scale: 1,
        transition: {
            duration: 0.1,
        }
    },
    hidde: {
        scale: 0,
        transition: {
            duration: 0.1,
        }
    }, 
}

export const firstPath = {
    closed: {
        d:"M 2 2.5 L 20 2.5"
    },
    opened: {
        d: "M 3 16.5 L 17 2.5"
    }
}
export const secondPath = {
    closed: {
        opacity: 1,
        transition: {
            duration: 0.1
        }
    },
    opened: {
        opacity: 0,
        transition: {
            duration: 0.1
        }
    }
}
export const thirdPath = {
    closed: {
        d: "M 2 16.346 L 20 16.346" 
    },
    opened: {
        d: "M 3 2.5 L 17 16.346"
    }
}
