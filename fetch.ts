function getJSON(url: string, headers?: Record<string, string>) {
  return new Promise<void>((resolve, reject) => {
    const xhr: XMLHttpRequest = new XMLHttpRequest();

    xhr.open("GET", url);
    // setRequestHeader must be called before calling the XHR send() method and after calling the open method
    if (typeof headers === "object") {
      Object.entries(headers).forEach(([header, value]) =>
        xhr.setRequestHeader(header, value)
      );
    }

    xhr.onload = function () {
      // fired after a response is received
      try {
        if (xhr.status >= 200 && xhr.status < 300) {
          // request successful
          resolve(JSON.parse(xhr.response));
        } else {
          // request unsuccessful i.e status == 200
          reject({ status: this.status, statusText: this.statusText });
        }
      } catch (e: any) {
        // unparseable response
        reject(e.message);
      }
    };

    // error in connecting
    xhr.onerror = function () {
      reject({ status: this.status, statusText: this.statusText });
    };

    xhr.send();
  });
}

export { getJSON };

// type checking
// read on setting your request headers
// read unsplash api documentation
