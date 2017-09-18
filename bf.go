package main

import (
 //        "fmt"
	// "net/http"
	// "html/template"

	// //"image"
	// //"image/jpeg"
	// _"image/png"
	// _"image/gif"

 //   "encoding/json"
    "fmt"
    "log"
    "net/http"
    _ "net/http/pprof"
 //   "strconv"
    "io/ioutil"

)

// type page struct {
// 	Title string
// 	Msg string
// }

// func index(w http.ResponseWriter, r *http.Request) {

//     //t, err := template.ParseFiles("templates/index.html", "templates/header.html", "templates/footer.html")
//     t, err := template.ParseFiles("index.html");
//     if err != nil {
//         fmt.Fprintf(w, err.Error())
//         return
//     }
//     // t.ExecuteTemplate(w, "index", nil);
//     t.Execute(w, "index");
//     w.Header().Set("Content-type", "text/html")

//     // title := r.URL.Path[len("/"):]

//     // if title != "exec/" {
//     //     t, _ := template.ParseFiles("index.html")
//     //     t.Execute(w, &page{Title: "Convert Image"})
//     // } else {
//     //     imgfile, fhead, _ := r.FormFile("imgfile")

//     //     img, ext, _ := image.Decode(imgfile)

//     //     w.Header().Set("Content-type", "image/jpeg")
//     //     w.Header().Set("Content-Disposition", "filename=\"" + fhead.Filename + "." + ext + "\"")
//     //     jpeg.Encode(w, img, &jpeg.Options{0})
//     // }
// }

func main() {
    fmt.Println("Lisnening on port :7788");
    //http.Handle("//", http.StripPrefix("/assets/", http.FileServer(http.Dir("./assets/"))))
	// http.HandleFunc("/", index);

    //http.Handle("/", http.FileServer(http.Dir("css/")))

    http.Handle("/img/", http.StripPrefix("/img/", http.FileServer(http.Dir("img"))))
    http.Handle("/css/", http.StripPrefix("/css/", http.FileServer(http.Dir("css"))))
    http.Handle("/js/", http.StripPrefix("/js/", http.FileServer(http.Dir("js"))))

    http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
        // здесь надо отдать статический файл, который будет общаться с API из браузера
        // открываем файл
        fileContents, err := ioutil.ReadFile("./index.html")
        if err != nil {
            log.Println(err)
            w.WriteHeader(http.StatusNotFound)
            return
        }

        // и выводим содержимое файла
        w.Write(fileContents)
    })


	//err := http.ListenAndServe(":7788", nil)
    http.ListenAndServe(":7788", nil)
     // if err != nil {
     //     fmt.Fprintf(w, err.Error())
     //     return
     // }
}