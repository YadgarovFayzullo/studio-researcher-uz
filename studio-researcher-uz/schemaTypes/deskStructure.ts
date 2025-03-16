// schemaTypes/deskStructure.ts
export const structure = (S: { list: () => { (): any; new(): any; title: { (arg0: string): { (): any; new(): any; items: { (arg0: any[]): any; new(): any } }; new(): any } }; listItem: () => { (): any; new(): any; title: { (arg0: string): { (): any; new(): any; child: { (arg0: any): any; new(): any } }; new(): any } }; documentTypeList: (arg0: string) => { (): any; new(): any; title: { (arg0: string): any; new(): any } } }) => {
    return S.list()
      .title('Контент')
      .items([
        S.listItem()
          .title('Журналы')
          .child(
            S.documentTypeList('journal')
              .title('Все журналы')
          ),
        S.listItem()
          .title('Выпуски журналов')
          .child(
            S.documentTypeList('journalYear')
              .title('Все выпуски')
          ),
        S.listItem()
          .title('Статьи')
          .child(
            S.documentTypeList('article')
              .title('Все статьи')
          )
      ])
  }