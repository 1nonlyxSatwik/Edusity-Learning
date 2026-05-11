
import os
import re
import sys

def check_imports(directory):
    errors = []
    for root, dirs, files in os.walk(directory):
        for file in files:
            if file.endswith(('.js', '.jsx', '.ts', '.tsx', '.css')):
                filepath = os.path.join(root, file)
                with open(filepath, 'r') as f:
                    content = f.read()
                    # Match import statements
                    imports = re.findall(r"import\s+.*?\s+from\s+['\"](.*?)['\"]", content)
                    imports += re.findall(r"import\s+['\"](.*?)['\"]", content)
                    
                    for imp in imports:
                        if imp.startswith('.'):
                            # Resolve path
                            imp_path = os.path.abspath(os.path.join(root, imp))
                            
                            # Check if it exists with exact casing
                            # We need to check each segment
                            # But first, let's check if it exists at all
                            exts = ['', '.js', '.jsx', '.ts', '.tsx', '.css']
                            found = False
                            for ext in exts:
                                if os.path.exists(imp_path + ext):
                                    # Now check casing
                                    actual_dir = os.path.dirname(imp_path + ext)
                                    actual_name = os.path.basename(imp_path + ext)
                                    if actual_name in os.listdir(actual_dir):
                                        found = True
                                        break
                            
                            if not found:
                                errors.append(f"In {filepath}: Import '{imp}' not found or casing mismatch")
    return errors

if __name__ == "__main__":
    src_dir = "/Users/s4twik/Desktop/edustity/src"
    errors = check_imports(src_dir)
    if errors:
        for err in errors:
            print(err)
    else:
        print("No import errors found.")
