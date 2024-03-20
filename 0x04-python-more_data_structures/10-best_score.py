#!/usr/bin/python3
def best_score(a_dictionary):
    if a_dictionary is None:
        return None
    maxval = 0
    maxkey = None
    for m, n in a_dictionary.items():
        if n > maxval:
            maxval = n
            maxkey = m
    return maxkey
