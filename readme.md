## Dependencies (can easily be removed if you want to use custom styles/icons)
- TailwindCSS
- Fontawesome Icons (https://fontawesome.com/v6/docs/web/use-with/react/)

## How to use
In your projects tauri.conf.json, add the following to allow the use of a custom titlebar:

```
"tauri": {
    "allowlist": {
        "window": {
            "startDragging": true,
            "maximize": true,
            "unmaximize": true,
            "minimize": true,
            "close": true
        },
    }
},

...

"windows": [
    {
        "decorations": false,
    }
]
```
This will allow the use of draggable regions by using the data attribute and disable the default tauri titlebar 

## All in one Vue Component
I created this component for my current project. Since the Font Awesome Icons didn't really look good I decided to create my own Vector Images.
Besides that I also use a Pinia store to store window state since I used that all over my application.
The window state is used to decide which Icons to render.