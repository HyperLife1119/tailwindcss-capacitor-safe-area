const plugin = require("tailwindcss/plugin");

function generateVariantUtilities(baseUtilities, variant, generateValue) {
	return Object.entries(baseUtilities).reduce(
		(acc, [selector, propertyValue]) => {
			const className = selector.slice(1);
			acc[`${className}-${variant}`] = (x) =>
				Object.entries(propertyValue).reduce((result, [property, value]) => {
					if (Array.isArray(value)) {
						result[property] = value.map((v) =>
							v === "-webkit-fill-available" ? v : generateValue(v, x),
						);
					} else {
						result[property] = generateValue(value, x);
					}
					return result;
				}, {});
			return acc;
		},
		{},
	);
}

const safeArea = plugin(({ addUtilities, matchUtilities, theme }) => {
	const baseUtilities = {
		".m-safe": {
			marginTop: "var(--ion-safe-area-top)",
			marginRight: "var(--ion-safe-area-right)",
			marginBottom: "var(--ion-safe-area-bottom)",
			marginLeft: "var(--ion-safe-area-left)",
		},
		".mx-safe": {
			marginRight: "var(--ion-safe-area-right)",
			marginLeft: "var(--ion-safe-area-left)",
		},
		".my-safe": {
			marginTop: "var(--ion-safe-area-top)",
			marginBottom: "var(--ion-safe-area-bottom)",
		},
		".ms-safe": {
			marginInlineStart: "var(--ion-safe-area-left)",
		},
		".me-safe": {
			marginInlineEnd: "var(--ion-safe-area-left)",
		},
		".mt-safe": {
			marginTop: "var(--ion-safe-area-top)",
		},
		".mr-safe": {
			marginRight: "var(--ion-safe-area-right)",
		},
		".mb-safe": {
			marginBottom: "var(--ion-safe-area-bottom)",
		},
		".ml-safe": {
			marginLeft: "var(--ion-safe-area-left)",
		},
		".p-safe": {
			paddingTop: "var(--ion-safe-area-top)",
			paddingRight: "var(--ion-safe-area-right)",
			paddingBottom: "var(--ion-safe-area-bottom)",
			paddingLeft: "var(--ion-safe-area-left)",
		},
		".px-safe": {
			paddingRight: "var(--ion-safe-area-right)",
			paddingLeft: "var(--ion-safe-area-left)",
		},
		".py-safe": {
			paddingTop: "var(--ion-safe-area-top)",
			paddingBottom: "var(--ion-safe-area-bottom)",
		},
		".ps-safe": {
			paddingInlineStart: "var(--ion-safe-area-left)",
		},
		".pe-safe": {
			paddingInlineEnd: "var(--ion-safe-area-left)",
		},
		".pt-safe": {
			paddingTop: "var(--ion-safe-area-top)",
		},
		".pr-safe": {
			paddingRight: "var(--ion-safe-area-right)",
		},
		".pb-safe": {
			paddingBottom: "var(--ion-safe-area-bottom)",
		},
		".pl-safe": {
			paddingLeft: "var(--ion-safe-area-left)",
		},
		".scroll-m-safe": {
			scrollMarginTop: "var(--ion-safe-area-top)",
			scrollMarginRight: "var(--ion-safe-area-right)",
			scrollMarginBottom: "var(--ion-safe-area-bottom)",
			scrollMarginLeft: "var(--ion-safe-area-left)",
		},
		".scroll-mx-safe": {
			scrollMarginRight: "var(--ion-safe-area-right)",
			scrollMarginLeft: "var(--ion-safe-area-left)",
		},
		".scroll-my-safe": {
			scrollMarginTop: "var(--ion-safe-area-top)",
			scrollMarginBottom: "var(--ion-safe-area-bottom)",
		},
		".scroll-ms-safe": {
			scrollMarginInlineStart: "var(--ion-safe-area-left)",
		},
		".scroll-me-safe": {
			scrollMarginInlineEnd: "var(--ion-safe-area-left)",
		},
		".scroll-mt-safe": {
			scrollMarginTop: "var(--ion-safe-area-top)",
		},
		".scroll-mr-safe": {
			scrollMarginRight: "var(--ion-safe-area-right)",
		},
		".scroll-mb-safe": {
			scrollMarginBottom: "var(--ion-safe-area-bottom)",
		},
		".scroll-ml-safe": {
			scrollMarginLeft: "var(--ion-safe-area-left)",
		},
		".scroll-p-safe": {
			scrollPaddingTop: "var(--ion-safe-area-top)",
			scrollPaddingRight: "var(--ion-safe-area-right)",
			scrollPaddingBottom: "var(--ion-safe-area-bottom)",
			scrollPaddingLeft: "var(--ion-safe-area-left)",
		},
		".scroll-px-safe": {
			scrollPaddingRight: "var(--ion-safe-area-right)",
			scrollPaddingLeft: "var(--ion-safe-area-left)",
		},
		".scroll-py-safe": {
			scrollPaddingTop: "var(--ion-safe-area-top)",
			scrollPaddingBottom: "var(--ion-safe-area-bottom)",
		},
		".scroll-ps-safe": {
			scrollPaddingInlineStart: "var(--ion-safe-area-left)",
		},
		".scroll-pe-safe": {
			scrollPaddingInlineEnd: "var(--ion-safe-area-left)",
		},
		".scroll-pt-safe": {
			scrollPaddingTop: "var(--ion-safe-area-top)",
		},
		".scroll-pr-safe": {
			scrollPaddingRight: "var(--ion-safe-area-right)",
		},
		".scroll-pb-safe": {
			scrollPaddingBottom: "var(--ion-safe-area-bottom)",
		},
		".scroll-pl-safe": {
			scrollPaddingLeft: "var(--ion-safe-area-left)",
		},
		".inset-safe": {
			top: "var(--ion-safe-area-top)",
			right: "var(--ion-safe-area-right)",
			bottom: "var(--ion-safe-area-bottom)",
			left: "var(--ion-safe-area-left)",
		},
		".inset-x-safe": {
			right: "var(--ion-safe-area-right)",
			left: "var(--ion-safe-area-left)",
		},
		".inset-y-safe": {
			top: "var(--ion-safe-area-top)",
			bottom: "var(--ion-safe-area-bottom)",
		},
		".start-safe": {
			insetInlineStart: "var(--ion-safe-area-left)",
		},
		".end-safe": {
			insetInlineEnd: "var(--ion-safe-area-left)",
		},
		".top-safe": {
			top: "var(--ion-safe-area-top)",
		},
		".right-safe": {
			right: "var(--ion-safe-area-right)",
		},
		".bottom-safe": {
			bottom: "var(--ion-safe-area-bottom)",
		},
		".left-safe": {
			left: "var(--ion-safe-area-left)",
		},
		".min-h-screen-safe": {
			minHeight: [
				"calc(100vh - (var(--ion-safe-area-top) + var(--ion-safe-area-bottom)))",
				"-webkit-fill-available",
			],
		},
		".max-h-screen-safe": {
			maxHeight: [
				"calc(100vh - (var(--ion-safe-area-top) + var(--ion-safe-area-bottom)))",
				"-webkit-fill-available",
			],
		},
		".h-screen-safe": {
			height: [
				"calc(100vh - (var(--ion-safe-area-top) + var(--ion-safe-area-bottom)))",
				"-webkit-fill-available",
			],
		},
		".min-h-fill-safe": {
			minHeight: ["-webkit-fill-available"],
		},
		".max-h-fill-safe": {
			maxHeight: ["-webkit-fill-available"],
		},
		".h-fill-safe": {
			height: ["-webkit-fill-available"],
		},
		".min-h-vh-safe": {
			minHeight: [
				"calc(100vh - (var(--ion-safe-area-top) + var(--ion-safe-area-bottom)))",
			],
		},
		".max-h-vh-safe": {
			maxHeight: [
				"calc(100vh - (var(--ion-safe-area-top) + var(--ion-safe-area-bottom)))",
			],
		},
		".h-vh-safe": {
			height: [
				"calc(100vh - (var(--ion-safe-area-top) + var(--ion-safe-area-bottom)))",
			],
		},
		".min-h-dvh-safe": {
			minHeight: [
				"calc(100dvh - (var(--ion-safe-area-top) + var(--ion-safe-area-bottom)))",
			],
		},
		".max-h-dvh-safe": {
			maxHeight: [
				"calc(100dvh - (var(--ion-safe-area-top) + var(--ion-safe-area-bottom)))",
			],
		},
		".h-dvh-safe": {
			height: [
				"calc(100dvh - (var(--ion-safe-area-top) + var(--ion-safe-area-bottom)))",
			],
		},
		".min-h-svh-safe": {
			minHeight: [
				"calc(100svh - (var(--ion-safe-area-top) + var(--ion-safe-area-bottom)))",
			],
		},
		".max-h-svh-safe": {
			maxHeight: [
				"calc(100svh - (var(--ion-safe-area-top) + var(--ion-safe-area-bottom)))",
			],
		},
		".h-svh-safe": {
			height: [
				"calc(100svh - (var(--ion-safe-area-top) + var(--ion-safe-area-bottom)))",
			],
		},
		".min-h-lvh-safe": {
			minHeight: [
				"calc(100lvh - (var(--ion-safe-area-top) + var(--ion-safe-area-bottom)))",
			],
		},
		".max-h-lvh-safe": {
			maxHeight: [
				"calc(100lvh - (var(--ion-safe-area-top) + var(--ion-safe-area-bottom)))",
			],
		},
		".h-lvh-safe": {
			height: [
				"calc(100lvh - (var(--ion-safe-area-top) + var(--ion-safe-area-bottom)))",
			],
		},
	};
	addUtilities(baseUtilities);

	const offsetUtilities = generateVariantUtilities(
		baseUtilities,
		"offset",
		(v, x) => `calc(${v} + ${x})`,
	);
	matchUtilities(offsetUtilities, {
		values: theme("spacing"),
		supportsNegativeValues: true,
	});

	const orUtilities = generateVariantUtilities(
		baseUtilities,
		"or",
		(v, x) => `max(${v}, ${x})`,
	);
	matchUtilities(orUtilities, {
		values: theme("spacing"),
		supportsNegativeValues: true,
	});
});

module.exports = safeArea;
