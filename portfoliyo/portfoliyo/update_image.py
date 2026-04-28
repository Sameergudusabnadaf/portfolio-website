import tkinter as tk
from tkinter import filedialog
import shutil
import os

def main():
    root = tk.Tk()
    root.attributes('-topmost', True)
    root.withdraw()

    print("Please check your screen for a file selection window...")
    
    file_path = filedialog.askopenfilename(
        title="Select Your Profile Photo (The one you uploaded in chat)",
        filetypes=[("Image files", "*.jpg *.jpeg *.png *.webp *.avif")]
    )

    if file_path:
        print(f"File selected: {file_path}")
        target_path = r"c:\Users\samee\Downloads\portfoliyo\portfoliyo\frontend\portimge1.png"
        shutil.copy2(file_path, target_path)
        print("Success! Your photo was added to the website folder.")
    else:
        print("No file was selected.")

if __name__ == "__main__":
    main()
