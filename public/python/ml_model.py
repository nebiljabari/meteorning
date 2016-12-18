from sklearn.datasets           import load_iris
from sklearn.neighbors          import KNeighborsClassifier
from sklearn.cross_validation   import train_test_split
import os, sys, pickle

# - - - IMPORTS - - - #

def main(arg1, arg2, arg3, arg4):
    arg01, arg02, arg03, arg04 = float(arg1), float(arg2), float(arg3), float(arg4)

    iris = load_iris()
    # We separate the observations from the targets
    X, y = iris.data, iris.target

    # 'random_state' will set the random seed, allowing reproduction of the shuffle
    # and '42' is for the geek joke. You can put the number you want
    X_train, X_test, y_train, y_test = train_test_split(X, y, random_state=42)

    model = KNeighborsClassifier(n_neighbors=13)
    model.fit(X_train, y_train)

    y_pred = model.predict([[arg01, arg02, arg03, arg04]])

    #with open('pickle.txt', 'wb') as f:
        #pickle.dump(model, f)

    '''
    path = os.getcwd().split('.')[0]

    with open(os.path.join(path, 'public/python/pickle.txt'), 'rb') as f:
        clf = pickle.load(f)

    y_pred = clf.predict([[arg01, arg02, arg03, arg04]])
    '''
    
    if (y_pred == 0):
        print('setosa')
    elif (y_pred == 1):
        print('versicolor')
    elif (y_pred == 2):
        print('virginica')

if __name__ == '__main__':
    main(sys.argv[1], sys.argv[2], sys.argv[3], sys.argv[4])
