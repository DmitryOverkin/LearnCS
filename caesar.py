'''             Программа для шифрования и дешифрования сообщений
                            с помощью шифра цезаря
'''

# Инициализируем переменную алфавита. 
alphabet = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя'

# Разбиваем алфавит на словарь { символ: индек, ... }
srting_to_dict = {ch: i for i, ch in enumerate(alphabet)}

# Просим пользователя ввести сообщение и ключ для дальнейшей шифровки 
user_message = input('Введите сообщение, которое хотите зашифровать:\n')
user_key = int(input('Введите ключ шифрования:\n'))

# Метод для шифрования сообщения 
def encrypt_decrypt_caesar(message, key, is_encrypt=True):
    result = [] # Инициализирем массив результата работы функции
    for ch in message.lower(): # В цикле проходимся по всем символам в сообщении пользователя
        if ch not in srting_to_dict: # Проверяем, нет ли символ в словаре алфавита
            result.append(ch) # Если нет, добавляем в массив результата
        else:
            ''' Находим индекс позиции для буквы в словаре алфавита
                с учетом смещения с помощью ключа по формуле

                new_ch = (ch + key) mod len(alphabet) - для шифрования
                new_ch = (ch - key) mod len(alphabet) - для дешифрования
            '''
            if is_encrypt: # Проверяем флаг шифрование или дешифрование
                index = (srting_to_dict[ch] + key) % len(alphabet)
            else:
                index = (srting_to_dict[ch] - key) % len(alphabet)

            result.append(alphabet[index]) # Добавляем новую букву в массив результата
    
    return ''.join(result) # Возврщаем массив результата, обьедененный в строку

encrypted_message = encrypt_decrypt_caesar(user_message, user_key) # Присваиваем зашифрованное сообщение переменной

print(encrypted_message) # Выводим пользователя зашифрованное сообщение




def decrypt_answer():
    print('Хотите расшифровать сообщение обратно?', 'y - да', 'n - нет', sep='\n')
    is_decrypt = input()

    if is_decrypt == 'y':
        print('Расшифровываю...')
        print('Расшифрованное сообщение:')
        print(encrypt_decrypt_caesar(encrypted_message, user_key, is_encrypt=False))
        print('Успешко расшифровано!')
    elif is_decrypt == 'n':
        print('Как пожелаете.')
    else:
        print('Введен не корректный символ.')
        decrypt_answer()

decrypt_answer()




