//First Challenge
const person = {
  id: 1,
  name: "Eddie Mock",
  age: 38,
  dob: "07-19-1985",
  gradesCompleted: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
  educationDetails: {
    highSchool: {
      name: "Uintah High",
      graduationYear: 2003,
      nestedDetail: {
        favoriteSubject: "Business",
        favoriteTeacher: "Mrs. Cant Remember Her Name",
      },
    },
  },
  "delete me": "mistaken value",
};

console.log(
  `Person ${person.id} has been through grade ${
    person.gradesCompleted[person.gradesCompleted.length - 1]
  }, etc...`
);

console.log(person);

delete person["delete me"];

console.log(person);

//Second Challenge
let user = {
  firstName: "Eddie",
  lastName: "Mock",
  city: "Vernal",
  semesters: {
    semesterOne: "incomplete",
    semesterTwo: "incomplete",
    semesterThree: "incomplete",
    semesterFour: "incomplete",
  },
};

function completeSemester(semester) {
  if (user.semesters.hasOwnProperty(semester)) {
    user.semesters[semester] = "complete";
  }
}

function deleteSemester(semester) {
  delete user.semesters[semester];
}

function addFavoriteLanguage(language) {
  user.favoriteLanguage = language;
}

completeSemester("semesterOne");
completeSemester("semesterTwo");
completeSemester("semesterThree");
deleteSemester("semesterFour");
addFavoriteLanguage("JavaScript");

console.log(user);

//Third Challenge
class AlternatingRemover {
  constructor(array) {
    this.array = array;
    this.removeFromStart = true;
  }

  remove() {
    if (this.array.length === 0) {
      console.log("The array is empty.");
      return;
    }

    if (this.removeFromStart) {
      this.removeFromStart = false;
      return this.array.shift();
    } else {
      this.removeFromStart = true;
      return this.array.pop();
    }
  }
}

// Example usage
const instance = new AlternatingRemover([1, 2, 3, 4, 5]);
console.log(instance.remove());
console.log(instance.remove());
console.log(instance.remove());
console.log(instance.remove());
console.log(instance.remove());
console.log(instance.remove());
