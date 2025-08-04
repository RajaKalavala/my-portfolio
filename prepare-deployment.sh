#!/bin/bash

echo "🚀 Preparing files for Hostinger deployment..."

# Check if build folder exists
if [ ! -d "build" ]; then
    echo "❌ Build folder not found. Please run 'npm run build' first."
    exit 1
fi

# Create deployment folder
echo "📁 Creating deployment folder..."
mkdir -p deployment
cp -r build/* deployment/

# Copy .htaccess to deployment folder
if [ -f "build/.htaccess" ]; then
    echo "✅ .htaccess file found and copied"
else
    echo "❌ .htaccess file not found in build folder"
fi

# Show file structure
echo ""
echo "📋 Files ready for upload:"
echo "=========================="
ls -la deployment/

echo ""
echo "📊 Build Summary:"
echo "=================="
echo "Total files: $(find deployment -type f | wc -l)"
echo "Total size: $(du -sh deployment | cut -f1)"
echo ""
echo "🎯 Next Steps:"
echo "==============="
echo "1. Upload all files from 'deployment/' folder to your Hostinger public_html"
echo "2. Follow the HOSTINGER_DEPLOYMENT_GUIDE.md for detailed instructions"
echo "3. Test your website at your domain"
echo ""
echo "✅ Deployment files are ready in the 'deployment/' folder!" 