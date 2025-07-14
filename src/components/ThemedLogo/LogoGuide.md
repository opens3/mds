# How to Add Any SVG Logo - Super Easy! 🎨

## Quick Steps:

1. **Get your SVG logo**
2. **Copy the content** between `<svg>` and `</svg>` tags
3. **Get the viewBox** from the `<svg>` tag
4. **Add it to logoVariants** using `createLogoVariant()`

## Example:

### Your Original SVG:

```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 50" width="200" height="50">
  <rect fill="#FF6B35" x="10" y="10" width="80" height="30"/>
  <circle fill="#004E89" cx="150" cy="25" r="20"/>
  <text fill="#FFFFFF" x="20" y="30">LOGO</text>
</svg>
```

### Step 1: Copy the content (everything between `<svg>` and `</svg>`):

```xml
<rect fill="#FF6B35" x="10" y="10" width="80" height="30"/>
<circle fill="#004E89" cx="150" cy="25" r="20"/>
<text fill="#FFFFFF" x="20" y="30">LOGO</text>
```

### Step 2: Get the viewBox: `"0 0 200 50"`

### Step 3: Add it to logoVariants in ThemedLogo.tsx:

```typescript
const logoVariants = {
  minio: {
    /* existing */
  },
  custom: {
    /* existing */
  },

  // Add your new logo here:
  mycompany: createLogoVariant(
    `
    <rect fill="#FF6B35" x="10" y="10" width="80" height="30"/>
    <circle fill="#004E89" cx="150" cy="25" r="20"/>
    <text fill="#FFFFFF" x="20" y="30">LOGO</text>
  `,
    '0 0 200 50',
    false
  ),
};
```

### Step 4: Use it:

```jsx
<ThemedLogo variant='mycompany' width={150} />
```

## Parameters Explained:

- **svgContent**: Everything between `<svg>` and `</svg>` tags
- **viewBox**: The viewBox attribute from your SVG (defines the coordinate system)
- **useThemeColor**:
  - `false` = Keep original colors (recommended for logos)
  - `true` = Use theme colors (like MinIO logo)

## Tips:

✅ **Always use `false` for useThemeColor** to preserve your logo's original colors  
✅ **Keep the exact viewBox** from your original SVG  
✅ **The logo will automatically scale** to fit the UI perfectly  
✅ **Colors are preserved** - your logo will look exactly as designed

## Real Example - Adding a GitHub Logo:

```typescript
github: createLogoVariant(
  `
  <path fill="#24292f" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
`,
  '0 0 16 16',
  false
);
```

That's it! Your logo will be perfectly sized and integrated. 🚀
