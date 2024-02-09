/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "images.pexels.com"
            }
        ]
    }, 
    
}

module.exports = nextConfig


module.exports = {
    webpack: (config) => {
      config.resolve.fallback = {
        "mongodb-client-encryption": false ,
        "aws4": false
      };
  
      return config;
    }
}