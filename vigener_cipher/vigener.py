'''
                Программа шифрования и дешифрования с помощью шифра Виженера
'''


alphabet = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя'

string_to_dict = {ch: i for i, ch in enumerate(alphabet)}

print('"""Вас приветсвует программа для шифрования и дешифрования"""\n"""c помощью шифра Виженера."""')

user_message = input('Введите текст для шифрования:\n')
user_key_word = input('Введите ключ-слово для шифрования:\n')

if not user_message or not user_key_word:
    print('Вы не ввели текст или ключ. Пока.')
    exit()

def vigener(message, key_word, is_encrypt=True):

    message = message.lower()
    key_word = key_word.lower()
    result = []
    key_word_repeated = (key_word * (len(message) // len(key_word))) + key_word[:len(message) % len(key_word)]
    index_to_char = {i: ch for ch, i in string_to_dict.items()}


    for idx, ch in enumerate(message):
        if ch not in string_to_dict:
            result.append(ch)
            continue

        char_pos = string_to_dict[ch]
        key_ch_pos = string_to_dict[key_word_repeated[idx]]

        if is_encrypt:
            res_ch_pos = (char_pos + key_ch_pos) % len(string_to_dict)
        else:
            res_ch_pos = (char_pos - key_ch_pos) % len(string_to_dict)

        result.append(index_to_char[res_ch_pos])

    return ''.join(result)

encrypted_text = vigener(user_message, user_key_word)

print("Ваш текст в зашифрованном виде:", encrypted_text, sep='\n')

def decrypt():
    while True:
        print("Хотите расшифровать обратно?", 'y - да', 'n - нет', sep='\n')
        is_decrypt = input()
        if is_decrypt == 'y':
            decrypted = vigener(encrypted_text, user_key_word, False)
            print("Расшифровка...")
            if decrypted == '':
                print('Не удалось расшифровать (возможно пустые данные).')
            else:
                print(decrypted)
                print('Сообщение успешно расшифрованно!')
            break
        elif is_decrypt == 'n':
            print('Ок. Пока.')
            break
        else:
            print('Некорректный ввод символа. Повторите попытку.')

decrypt()