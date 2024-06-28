
export const sidebarVariants = {
    opened: (heightDim = 1000) => ({
        clipPath: `ellipse(${heightDim * 2 + 200}px ${heightDim * 2 + 200}px  at 50% 83vh)`,
        transition: {
            type: "spring",
            stiffness: 20,
            restDelta: 2
        }
    }),
    closed: {
        clipPath: `ellipse(30px 30px at 50% 83vh)`,
        transition: {
            type: "spring",
            stiffness: 400,
            damping: 40
        }
    },
    firstShow: {
        clipPath: `ellipse(30px 30px at 50% 83vh)`,
        transition: {
            duration: 0.6,
            type: "spring",
        }
    },
    show: {
        clipPath: `ellipse(30px 30px at 50% 83vh)`,
        transition: {
            duration: 0.2,
            type: "spring",
        }
    },
    hidde: {
        clipPath: `ellipse(0px 0px at 50% 83vh)`,
        transition: {
            duration: 0.2,
            type: "spring",
            delay: 0.2
        }
    }
}