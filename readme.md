## Dependencies (can easily be removed if you want to use custom styles/icons)
- TailwindCSS
- Fontawesome Icons (https://fontawesome.com/v6/docs/web/use-with/react/)

## How to use
In your projects tauri.conf.json, add the following to allow draggable regions:

```
"tauri": {
    "allowlist": {
        "window": {
            "startDragging": true
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
