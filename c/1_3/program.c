#include <stdlib.h> 
#include <stdio.h>
#include <string.h>

void remove_duplicates(char* word) {
    int i, j;
    size_t length = strlen(word);

    if (length == 1) {
        return;
    }

    for(i=0; i < length; i++) {
        if (word[i] == '-') {
            word[i] = word[i + 1];
        }

        for (j=i+1; j < length; j++) {
            if (word[i] == word[j]) {
                word[j] = '-';
            }
        }
    }
}

int main(int argc, char* argv[]) {
    char word[255] = "test";
    remove_duplicates(word);
    printf("test = %s\n", word);

    strcpy(word, "ee");
    remove_duplicates(word);
    printf("ee = %s\n", word);

    strcpy(word, "a");
    remove_duplicates(word);
    printf("a = %s\n", word);

    strcpy(word, "facebook");
    remove_duplicates(word);
    printf("facebook = %s\n", word);

    strcpy(word, "aaabbb");
    remove_duplicates(word);
    printf("aaabbb = %s\n", word);

    strcpy(word, "abcd");
    remove_duplicates(word);
    printf("abcd = %s\n", word);
}
