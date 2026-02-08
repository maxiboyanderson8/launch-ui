/** @type {import('next').NextConfig} */
const nextConfig = {
	typescript: {
		// Allow production builds even if TypeScript type errors are present
		ignoreBuildErrors: true,
	},
	eslint: {
		// Allow production builds even if ESLint errors are present
		ignoreDuringBuilds: true,
	},
};

export default nextConfig;
