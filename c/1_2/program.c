#include <stdlib.h> 
#include <stdio.h>
#include <string.h>
#include <stdbool.h>

char* strdup(const char* str) {
    size_t siz;
    char* copy;

    siz = strlen(str) + 1; // WHY +1?

    if ((copy = malloc(siz)) == NULL) {
        return NULL; // why? If I can't allocate?
    }

    memcpy(copy, str, siz);

    return copy;
}

void reverse(char* word) {
    int length = (int)strlen(word);
    int i=0, j=(int)length - 1;

    for(int k=0; k < length / 2; k++) {
        char aux = word[i];
        word[i] = word[j];
        word[j] = aux;
        i++;
        j--;
    }
}

int main(int argc, char* argv[]) {
    char word[255] = "test";
    reverse(word);
    printf("test = %s (%d)\n", word, strcmp(word, "tset") == 0);

    strcpy(word, "facebook");
    reverse(word);
    printf("facebook = %s (%d)\n", word, strcmp(word, "koobecaf") == 0);

    strcpy(word, "application");
    reverse(word);
    printf("application = %s (%d)\n", word, strcmp(word, "noitacilppa") == 0);
}
