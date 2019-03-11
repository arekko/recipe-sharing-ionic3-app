import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { Subscription } from "rxjs/Subscription";
import * as fromStore from "../../store";
import { RecipeViewPage } from "../recipe-view/recipe-view";
import { Media } from "./../../interfaces/media";
import { BookmarkProvider } from "./../../providers/bookmark/bookmark";
import { MediaProvider } from "./../../providers/media/media";

@IonicPage()
@Component({
  selector: "page-bookmarks",
  templateUrl: "bookmarks.html"
})
export class BookmarksPage implements OnInit {
  bookmarks: Media[] = [];
  subscribeBMChanged: Subscription;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private mediaProvider: MediaProvider,
    private bookmarkProvider: BookmarkProvider,
    private store: Store<fromStore.AppState>
  ) {}

  ngOnInit() {
    this.store.select(fromStore.getBookmarks).subscribe(bookmarks => {
      const tmpData = [];
      bookmarks.forEach(bm => {
        this.mediaProvider
          .getSingleMedia(bm.file_id)
          .subscribe((media: Media) => tmpData.push(media));
        this.bookmarks = tmpData;
      });
    });

    // this.store.dispatch(new fromStore.LoadUserBookmarks());
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad BookmarksPage");
  }

  /**
   *
   *
   * @param {number} fileId
   * @memberof BookmarksPage
   */
  deleteBookmark(fileId: number) {
    const inx = this.bookmarks.findIndex(el => el.file_id === fileId);
    this.bookmarkProvider.deleteFavoriteByFileId(fileId).subscribe(res => {
      this.bookmarks.splice(inx, 1);
      this.store.dispatch(new fromStore.LoadUserBookmarks());
    });
  }

  showRecipe(fileId) {
    this.navCtrl.push(RecipeViewPage, {
      fileId: fileId
    });
  }
}
