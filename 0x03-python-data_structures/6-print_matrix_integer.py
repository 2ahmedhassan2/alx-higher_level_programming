#!/usr/bin/python3
def print_matrix_integer(matrix=[[]]):
    if not matrix:
        return None
    for v in matrix:
        if len(v) == 0:
            print()
        for i in range(len(v)):
            print("{:d}".format(v[i]),
                  end="\n" if i is len(v) - 1 else " ")
