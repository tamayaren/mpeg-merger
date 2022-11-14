# MPEG MERGER

Uses FFMPEG to merge MP4 and MP3 with the same name.

# Instructions
## Pre-requisites
Must have [Node.js](https://nodejs.org/en/download/) downloaded (Node.js 14+).

## Installation
1. Download latest revision, extract to a folder.
2. Right-click on extracted directory `> Open with Command Prompt`. If you have `Git Bash`, do `Git Bash here`.
3. Type `npm install` to get all required packages.
4. Create a "input" folder and put all the merging files.
5. Type `npm start` and wait for the merging process to complete.

If there is no `Open with Command Prompt` option in your context menu, you may have to manually `cd` pointed to the extracted directory.
To make things easier, you should install [Git Bash from Git](https://git-scm.com/downloads)

# Naming Convention
The video and audio files **must have the same name**. This is **case-sensitive**, so minor discrepencies will be noticed.
The merged file will be put inside a created `output/` folder. If you're going to handle big files, make sure to have adequate disk space.
Be sure to back-up the files first before merging!

### Tamayaren 2022
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.