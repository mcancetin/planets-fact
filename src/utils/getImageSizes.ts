export const getImageSizes = (planet: string) => {
  switch (planet) {
    case "mercury":
      return {
        mobile: {
          width: 111,
          height: 111,
        },
        tablet: {
          width: 184,
          height: 184,
        },
        desktop: {
          width: 290,
          height: 290,
        },
      };
    case "venus":
      return {
        mobile: {
          width: 154,
          height: 154,
        },
        tablet: {
          width: 253,
          height: 253,
        },
        desktop: {
          width: 400,
          height: 400,
        },
      };
    case "earth":
      return {
        mobile: {
          width: 173,
          height: 173,
        },
        tablet: {
          width: 285,
          height: 285,
        },
        desktop: {
          width: 450,
          height: 450,
        },
      };

    case "mars":
      return {
        mobile: {
          width: 129,
          height: 129,
        },
        tablet: {
          width: 213,
          height: 213,
        },
        desktop: {
          width: 336,
          height: 336,
        },
      };

    case "jupiter":
      return {
        mobile: {
          width: 224,
          height: 224,
        },
        tablet: {
          width: 369,
          height: 369,
        },
        desktop: {
          width: 582,
          height: 582,
        },
      };

    case "saturn":
      return {
        mobile: {
          width: 256,
          height: 256,
        },
        tablet: {
          width: 422,
          height: 422,
        },
        desktop: {
          width: 666,
          height: 666,
        },
      };

    case "uranus":
      return {
        mobile: {
          width: 176,
          height: 176,
        },
        tablet: {
          width: 290,
          height: 290,
        },
        desktop: {
          width: 458,
          height: 458,
        },
      };

    case "neptune":
      return {
        mobile: {
          width: 173,
          height: 173,
        },
        tablet: {
          width: 285,
          height: 285,
        },
        desktop: {
          width: 450,
          height: 450,
        },
      };

    default:
      break;
  }
};
