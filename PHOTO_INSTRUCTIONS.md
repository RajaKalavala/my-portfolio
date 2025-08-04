# Adding Your Photo to the Hero Section

## 📸 How to Add Your Photo

### Option 1: Using a Local Image File

1. **Add your photo to the public folder:**

   ```
   public/images/raja-kalavala.jpg
   ```

2. **Update the Hero component** (`src/components/Hero.tsx`):

   ```jsx
   // Replace this div:
   <div className="w-full h-full bg-gradient-to-br from-primary-400 to-primary-600 rounded-full flex items-center justify-center text-white text-6xl font-bold shadow-2xl">
     RK
   </div>

   // With this img tag:
   <img
     src="/images/raja-kalavala.jpg"
     alt="Raja Kalavala"
     className="w-full h-full object-cover rounded-full shadow-2xl"
   />
   ```

### Option 2: Using an External URL

1. **Update the Hero component** (`src/components/Hero.tsx`):
   ```jsx
   // Replace the placeholder div with:
   <img
     src="https://your-photo-url.com/raja-kalavala.jpg"
     alt="Raja Kalavala"
     className="w-full h-full object-cover rounded-full shadow-2xl"
   />
   ```

## 🎨 Photo Recommendations

### **Best Practices:**

- **Size**: Use a square image (1:1 aspect ratio) for best results
- **Resolution**: At least 400x400 pixels, preferably 800x800 or higher
- **Format**: JPG or PNG
- **Background**: Professional headshot with a clean background
- **Style**: Business casual or professional attire

### **Photo Specifications:**

- **Dimensions**: 400x400px minimum, 800x800px recommended
- **File Size**: Keep under 500KB for fast loading
- **Format**: JPG for photos, PNG for graphics with transparency

## 🔧 Customization Options

### **Change Photo Size:**

```jsx
// For a smaller photo:
className = 'relative w-64 h-64 lg:w-80 lg:h-80'

// For a larger photo:
className = 'relative w-96 h-96 lg:w-[28rem] lg:h-[28rem]'
```

### **Change Photo Shape:**

```jsx
// For a rounded rectangle instead of circle:
className = 'w-full h-full object-cover rounded-2xl shadow-2xl'

// For a square with rounded corners:
className = 'w-full h-full object-cover rounded-xl shadow-2xl'
```

### **Add Border Effects:**

```jsx
// Add a colored border:
className =
  'w-full h-full object-cover rounded-full shadow-2xl border-4 border-primary-500'

// Add a gradient border:
className =
  'w-full h-full object-cover rounded-full shadow-2xl ring-4 ring-gradient-to-r from-primary-400 to-blue-500'
```

## 📱 Responsive Behavior

The photo section is fully responsive:

- **Mobile**: Photo appears below the text content
- **Desktop**: Photo appears to the left of the text content
- **Tablet**: Adapts smoothly between mobile and desktop layouts

## ✨ Current Features

The photo section includes:

- ✅ Animated entrance effects
- ✅ Floating tech icons around the photo
- ✅ Decorative elements and glow effects
- ✅ Responsive design
- ✅ Dark/light mode compatibility
- ✅ Professional styling with shadows and gradients

---

**Note**: The current placeholder shows "RK" initials in a gradient circle. Replace it with your actual photo for a more personal touch!
