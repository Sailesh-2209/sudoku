import random
import sys
sys.stdout = open('C:\\Users\\saile\\Desktop\\output.txt', 'w')

def print_board(array):
    print(' \n')
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

def make_empty_list(array):
    empty_list = []
    for i in range(9):
        for j in range(9):
            if array[i][j] == 0:
                empty_list.append([i, j])
    return empty_list

def solve_board(board):
    i = 0
    empty_list = make_empty_list(board)
    while (i < len(empty_list)):
        new_num = board[empty_list[i][0]][empty_list[i][1]] + 1
        if new_num < 10:
            if (is_valid(empty_list[i][0], empty_list[i][1], new_num, board)):
                board[empty_list[i][0]][empty_list[i][1]] = new_num
                i += 1
            else:
                board[empty_list[i][0]][empty_list[i][1]] = new_num
        else:
            board[empty_list[i][0]][empty_list[i][1]] = 0
            if i > 0:
                i -= 1
    return board

def rotate_board(board):
    new_board = [
        [0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0]
    ]
    for i in range(9):
        for j in range(9):
            new_board[i][j] = board[j][i]
    return new_board

board_array = 
[
    [0, 2, 0, 5, 0, 0, 4, 7, 0], 
    [5, 0, 0, 7, 0, 0, 6, 0, 0], 
    [0, 0, 3, 0, 9, 0, 0, 0, 0], 
    [6, 9, 0, 0, 5, 0, 2, 0, 0], 
    [0, 0, 0, 0, 0, 0, 0, 0, 0], 
    [0, 0, 5, 0, 8, 0, 0, 4, 7], 
    [0, 0, 0, 0, 7, 0, 8, 0, 0], 
    [0, 0, 2, 0, 0, 3, 0, 0, 9], 
    [0, 4, 9, 0, 0, 8, 0, 6, 0]
]

print(solve_board(board_array))
# print(rotate_board(board_array))
sys.stdout.close()
