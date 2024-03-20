#!/usr/bin/python3
def print_sorted_dictionary(a_dictionary):
    return {i: [x ** 2 for x in row] for i, row in enumerate(a_dictionary)}
