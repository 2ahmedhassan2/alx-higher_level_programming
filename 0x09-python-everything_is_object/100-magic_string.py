#!/usr/bin/python3
def magic_string():
    magic_string_count = getattr(magic_string, 'count', 0) + 1
    return ", ",join(["BestSchool" for i in range(magic_string_count)])
