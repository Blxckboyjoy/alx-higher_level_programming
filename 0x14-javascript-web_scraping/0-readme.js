import sys

try:
    with open(sys.argv[1], 'r', encoding='utf-8') as file:
        print(file.read())
except Exception as e:
    print(e)
