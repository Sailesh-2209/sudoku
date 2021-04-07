import random

def print_board(array):
    for i in range(9):
        for j in range(9):
            print(array[i][j], end='')
            if ((j + 1) % 3 == 0 and j != 8):
                print(' | ', end='')
        print()
        if ((i + 1) % 3 == 0 and i != 8):
            print('-' * 16)

def find_neighbours(row_index, col_index):

    neighbours = []

    # to find group neighbours

    if row_index == 0 or row_index == 1 or row_index == 2:
        if col_index == 0 or col_index == 1 or col_index == 2:
            for i in range(3):
                for j in range(3):
                    if i == row_index and j == col_index:
                        continue
                    else:
                        neighbours.append([i, j])
        elif col_index == 3 or col_index == 4 or col_index == 5:
            for i in range(3):
                for j in range(3, 6):
                    if i == row_index and j == col_index:
                        continue
                    else: 
                        neighbours.append([i, j])
        elif col_index == 6 or col_index == 7 or col_index == 8:
            for i in range(3):
                for j in range(6, 9):
                    if i == row_index and j == col_index:
                        continue
                    else:
                        neighbours.append([i, j])
    elif row_index == 3 or row_index == 4 or row_index == 5:
        if col_index == 0 or col_index == 1 or col_index == 2:
            for i in range(3, 6):
                for j in range(3):
                    if i == row_index and j == col_index:
                        continue
                    else:
                        neighbours.append([i, j])
        elif col_index == 3 or col_index == 4 or col_index == 5:
            for i in range(3, 6):
                for j in range(3, 6):
                    if i == row_index and j == col_index:
                        continue
                    else: 
                        neighbours.append([i, j])
        elif col_index == 6 or col_index == 7 or col_index == 8:
            for i in range(3, 6):
                for j in range(6, 9):
                    if i == row_index and j == col_index:
                        continue
                    else:
                        neighbours.append([i, j])
    elif row_index == 6 or row_index == 7 or row_index == 8:
        if col_index == 0 or col_index == 1 or col_index == 2:
            for i in range(6, 9):
                for j in range(3):
                    if i == row_index and j == col_index:
                        continue
                    else:
                        neighbours.append([i, j])
        elif col_index == 3 or col_index == 4 or col_index == 5:
            for i in range(6, 9):
                for j in range(3, 6):
                    if i == row_index and j == col_index:
                        continue
                    else: 
                        neighbours.append([i, j])
        elif col_index == 6 or col_index == 7 or col_index == 8:
            for i in range(6, 9):
                for j in range(6, 9):
                    if i == row_index and j == col_index:
                        continue
                    else:
                        neighbours.append([i, j])

    # to find column neighbours

    for i in range(9):
        if i != row_index:
            neighbours.append([i, col_index])

    # to find row neighbours

    for i in range(9):
        if i != col_index:
            neighbours.append([row_index, i])

    return neighbours

def is_valid(row_index, col_index, number, array):
    neighbours = find_neighbours(row_index, col_index)
    for item in neighbours:
        if (array[item[0]][item[1]] == number):
            return False
    return True

def generate_board(original_array):
    array = original_array.copy()
    i = 0
    while (i >= 0 and i < 9):
        j = 0
        while (j >= 0 and j < 9):
            print(print_board(array))
            new_num = array[i][j] + 1
            if (new_num < 10):
                if (is_valid(i, j, new_num, array)):
                    array[i][j] = new_num
                    j += 1
                else:
                    array[i][j] = new_num
            else:
                if (j > 0):
                    array[i][j] = 0
                    j -= 1
                else:
                    i -= 1
                    j = 8
                    break
        i += 1
    return array

def solve_board(original_board):
    board = original_board.copy()
    i = 0
    while (i >= 0 and i < 9):
        j = 0
        while (j >= 0 and j < 9):
            if (original_board[i][j] == 0):
                new_num = board[i][j] + 1
                if (new_num < 10):
                    if (is_valid(i, j, new_num, board)):
                        board[i][j] = new_num
                        j += 1
                    else:
                        board[i][j] = new_num
                else:
                    board[i][j] = 0
                    j -= 1
                    while (original_board[i][j] != 0):
                        if (j > 0):
                            j =- 1
                        else:
                            i -= 1
                            j = 8
            j += 1
        i += 1
    return board

board_array = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0]
]

board_array_2 = [
    [0, 6, 0, 0, 0, 4, 0, 0, 0],
    [0, 0, 0, 0, 3, 6, 1, 0, 4],
    [0, 5, 0, 8, 7, 0, 0, 0, 0],
    [8, 2, 0, 0, 0, 0, 5, 0, 0],
    [0, 7, 5, 0, 0, 0, 9, 1, 0],
    [0, 0, 9, 0, 0, 0, 0, 8, 2],
    [0, 0, 0, 0, 6, 5, 0, 9, 0],
    [5, 0, 8, 3, 2, 0, 0, 0, 0],
    [0, 0, 0, 1, 0, 0, 0, 4, 0]
]

# print_board(generate_board(board_array))
# print_board(board_array)
# print_board(solve_board(board_array_2))
print(is_valid(0, 0, 3, board_array_2))