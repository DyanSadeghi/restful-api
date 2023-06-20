const Transform = require("./../Transform");
const CourseTransform = require("./CourseTransform");

module.exports = class EpisodeTransform extends Transform {
  transform(item) {
    return {
      id: item._id,
      title: item.title,
      body: item.body,
      number: item.number,
      videoUrl: item.videoUrl,
      ...this.showCourse(item),
    };
  }
  showCourse(item) {
    if (this.withCourseStatus) {
      return {
        course: new CourseTransform().transform(item.course),
      };
    }
    return {};
  }
  withCourse() {
    this.withCourseStatus = true;
    return this;
  }
};
