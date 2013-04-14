#include <stdlib.h> 
#include <stdio.h>
#include <string.h>
#include <stdbool.h>

void swap(char* entry, int i, int j) {
    char aux = entry[i];
    entry[i] = entry[j];
    entry[j] = aux;
}

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

char* sort(char* entry, size_t length) {
    int i, j;
    char* aux = strdup(entry);
    /*printf("%s (%d)\n", aux, (int)length);*/

    for (i=1; i < length; i++) {
        for (j=i; j > 0; j--) {
            if (aux[j] < aux[j-1]) {
                swap(aux, j, j-1);
            } else {
                break;
            }
        }
    }

    /*printf("sorted %s = %s\n", entry, aux);*/
    return aux;
}


bool all_unique(char* entry) {
    size_t len = strlen(entry);
    char* sorted = sort(entry, len);
    /*printf("sorted: %s\n", sorted);*/

    for (int i=1; i < len; i++) {
        if (sorted[i] == sorted[i-1]) {
            return false;
        }
    }

    return true;
}

int main(int argc, char* argv[]) {
    printf("%s has all unique characters? %d\n", "something", all_unique("something"));
    printf("%s has all unique characters? %d\n", "beatles", all_unique("beatles"));
    printf("%s has all unique characters? %d\n", "forever", all_unique("forever"));
    printf("%s has all unique characters? %d\n", "try", all_unique("try"));
    printf("%s has all unique characters? %d\n", "harder", all_unique("harder"));
}
