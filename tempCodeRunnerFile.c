#include<stdio.h>

struct usecase
{
    int id;
    char name[20];
    char bgroup[2];
}obj[20];

int main()
{
    int flag[20];
    int i,j;
    int temp;
    for(i=1;i<=20;i++)
    {
        flag[i]=0;
    }

    int x,y;
    printf("/////   WELCOME TO ONLINE REGISTER PLATFORM   \\\\\\n\n\n\n\n\n");
    do
    {    
        printf("MENU: \n 1)Register \n 2)Login \n 3)View data \n 4)exit");
        printf("\n>>Enter choice: \n>>");
        scanf("%d",&x);

        switch (x)
        {
            case 1:
            {
                L: printf(">>Enter any record number: ");
                scanf("%d",&y);
                if(flag[y]==0)
                {
                    printf(">>Enter name: \n>>");
                    scanf("%s",&obj[y].name);
                    printf(">>Enter bloodgroup: \n>>");
                    scanf("%s",&obj[y].bgroup);
                    flag[y]=1;
                }
                else
                {
                    printf("\nRecord already exist, select other number: ");
                    goto L;
                }

                printf("\nSelect your integer id: ");
                scanf("%d",&obj[y].id);
            }break;
    
            case 2:
            {
                printf("Enter id: ");
                scanf("%d",&temp);
                for(i=0;i<20;i++)
                {
                    if(temp==obj[i].id)
                    {
                        printf("you are valid use! \n");
                    }
                }
            }break;
        }
    }while (x!=4);

}

void data()
{
    printf("\nyou are logged in!!\n");
}