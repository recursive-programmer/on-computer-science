# The Theory of Computer Science

```ocaml
type contentStatus = | OnProgress | Finished | ToBeSuppliedLater

let articleStatus = ToBeSuppliedLater

let generateCaptionOfArticleStatus = (status) => switch(status){
  | OnProgress => Js.log("This article status is on progress, so there will be rough edges here and there.")
  | ToBeSuppliedLater => Js.log("The content of this article will be supplied later.")
  | Finished => Js.log("Well son, work will never finish in a farm. - The ultimate gift")
}

articleStatus -> generateCaptionOfArticleStatus
```