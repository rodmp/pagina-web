const screens = {
    "xs-max": 543,
    "sm-min": 544,
    "sm-max": 767,
    "md-min": 768,
    "md-max": 991,
    "lg-min": 992,
    "lg-max": 1199,
    "xl-min": 1200,
};

/**
 * Check screen size
 *
 * @param {'xs' | 'sm' | 'md' | 'lg' | 'xl'} size
 */
const isScreen = (size) => {
    const screenPx = window.innerWidth;
    return (
        (screenPx >= screens[`${size}-min`] || size === "xs") &&
        (screenPx <= screens[`${size}-max`] || size === "xl")
    );
};

const isAppInstalled = () => {
    if (process.env.MIX_APP_INSTALL === "local") {
        return false;
    } else {
        return true;
    }
};

export {isScreen, isAppInstalled};
