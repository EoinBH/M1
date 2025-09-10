import sys

def main():
    print("Bonjour tout le monde (spéciale dédicace à Antoine Gourru !)")

    #on peut aussi accéder aux arguments ajoutés en ligne de commande
    args = sys.argv[1:]
    if (len(args)>0):
        print("avec les arguments...")
        for arg in args:
            print(arg)

if __name__ == "__main__":
    main()