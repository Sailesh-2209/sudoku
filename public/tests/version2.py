import random

board_array = []
for i in range(9):
    board_array.append([list(range(1, 10))] * 9)

numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]

def draw_board():
    pass

def find_block_neighbours(row_index, column_index, array):
    neighbours = []
    if row_index == 0 or row_index == 1 or row_index == 2:
        if column_index == 0 or column_index == 1 or column_index == 2:
            for i in range(3):
                for j in range(3):
                    if isinstance(array[i][j], int):
                        continue
                    else:
                        neighbours.append([i, j])
        elif column_index == 3 or column_index == 4 or column_index == 5:
            for i in range(3):
                for j in range(3, 6):
                    if isinstance(array[i][j], int):
                        continue
                    else: 
                        neighbours.append([i, j])
        elif column_index == 6 or column_index == 7 or column_index == 8:
            for i in range(3):
                for j in range(6, 9):
                    if isinstance(array[i][j], int):
                        continue
                    else:
                        neighbours.append([i, j])
    elif row_index == 3 or row_index == 4 or row_index == 5:
        if column_index == 0 or column_index == 1 or column_index == 2:
            for i in range(3, 6):
                for j in range(3):
                    if isinstance(array[i][j], int):
                        continue
                    else:
                        neighbours.append([i, j])
        elif column_index == 3 or column_index == 4 or column_index == 5:
            for i in range(3, 6):
                for j in range(3, 6):
                    if isinstance(array[i][j], int):
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
                    if isinstance(array[i][j], int):
                        continue
                    else:
                        neighbours.append([i, j])
        elif column_index == 3 or column_index == 4 or column_index == 5:
            for i in range(6, 9):
                for j in range(3, 6):
                    if isinstance(array[i][j], int):
                        continue
                    else: 
                        neighbours.append([i, j])
        elif column_index == 6 or column_index == 7 or column_index == 8:
            for i in range(6, 9):
                for j in range(6, 9):
                    if isinstance(array[i][j], int):
                        continue
                    else:
                        neighbours.append([i, j])
    return neighbours

def find_row_neighbours(row_index, column_index, array):
    neighbours = []
    for i in range(9):
        if isinstance(array[i], int):
            neighbours.append([row_index, i])
    return neighbours

def find_col_neighbours(row_index, column_index, array):
    neighbours = []
    for i in range(9):
        if isinstance(array[i], int):
            neighbours.append([i, column_index])
    return neighbours

def generate_board(array):
    row_index = random.choice(numbers)
    col_index = random.choice(numbers)
    array[row_index][col_index] = random.choice(numbers)
    block_neighbours = find_block_neighbours(row_index, col_index, array)
    row_neighbours = find_row_neighbours(row_index, col_index, array)
    col_neighbours = find_col_neighbours(row_index, col_index, array)
    neighbours = block_neighbours + row_neighbours + col_neighbours

    next_element = random.choice(neighbours)
    array[next_element[0]][next_element[1]] = min(array[next_element[0]][next_element[1]])