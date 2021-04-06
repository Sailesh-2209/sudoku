import random
number_list = [1, 2, 3, 4, 5, 6, 7, 8, 9]

boardArray = []
for i in range(9):
    boardArray.append([0] * 9)

def find_neighbours(row_index, column_index):
    neighbours = []
    if row_index == 0 or row_index == 1 or row_index == 2:
        if column_index == 0 or column_index == 1 or column_index == 2:
            for i in range(3):
                for j in range(3):
                    if (i == row_index and j == column_index):
                        continue
                    else:
                        neighbours.append([i, j])
        elif column_index == 3 or column_index == 4 or column_index == 5:
            for i in range(3):
                for j in range(3, 6):
                    if (i == row_index and j == column_index):
                        continue
                    else: 
                        neighbours.append([i, j])
        elif column_index == 6 or column_index == 7 or column_index == 8:
            for i in range(3):
                for j in range(6, 9):
                    if (i == row_index and j == column_index):
                        continue
                    else:
                        neighbours.append([i, j])
    elif row_index == 3 or row_index == 4 or row_index == 5:
        if column_index == 0 or column_index == 1 or column_index == 2:
            for i in range(3, 6):
                for j in range(3):
                    if (i == row_index and j == column_index):
                        continue
                    else:
                        neighbours.append([i, j])
        elif column_index == 3 or column_index == 4 or column_index == 5:
            for i in range(3, 6):
                for j in range(3, 6):
                    if (i == row_index and j == column_index):
                        continue
                    else: 
                        neighbours.append([i, j])
        elif column_index == 6 or column_index == 7 or column_index == 8:
            for i in range(3, 6):
                for j in range(6, 9):
                    if (i == row_index and j == column_index):
                        continue
                    else:
                        neighbours.append([i, j])
    elif row_index == 6 or row_index == 7 or row_index == 8:
        if column_index == 0 or column_index == 1 or column_index == 2:
            for i in range(6, 9):
                for j in range(3):
                    if (i == row_index and j == column_index):
                        continue
                    else:
                        neighbours.append([i, j])
        elif column_index == 3 or column_index == 4 or column_index == 5:
            for i in range(6, 9):
                for j in range(3, 6):
                    if (i == row_index and j == column_index):
                        continue
                    else: 
                        neighbours.append([i, j])
        elif column_index == 6 or column_index == 7 or column_index == 8:
            for i in range(6, 9):
                for j in range(6, 9):
                    if (i == row_index and j == column_index):
                        continue
                    else:
                        neighbours.append([i, j])
    return neighbours


def is_valid(row_index, column_index, number, array):
    neighbours = find_neighbours(row_index, column_index)
    for item in neighbours:
        if array[item[0]][item[1]] == number:
            return False
    for i in range(9):
        if array[row_index][i] == number:
            return False
    for i in range(9):
        if array[i][column_index] == number:
            return False
    return True

def generate_random_number():
    return random.choice(number_list)

def generate_board():
    new_board_array = boardArray
    for i in range(9):
        for j in range(9):
            check_list = []
            while True:
                number = generate_random_number()
                if (number not in check_list):
                    check_list.append(number)
                if is_valid(i, j, number, new_board_array):
                    new_board_array[i][j] = number
                    break
                test = 1 in check_list and 2 in check_list and 3 in check_list and 4 in check_list and 5 in check_list and 6 in check_list and 7 in check_list and 8 in check_list
                if (test):
                    break
    return new_board_array

def display_board(array):
    for item in array:
        for meta_item in item:
            print(' ' + str(meta_item) + ' ' + '|', end='')
        print()
        print('-'*36)

display_board(generate_board())