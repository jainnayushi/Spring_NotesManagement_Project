package com.ayushi.Components;

import java.util.Date;

    public class Notes {
        private String noteTitle;
        private String noteContent;

        public Notes(String noteTitle, String noteContent, Date noteDate) {
            this.noteTitle = noteTitle;
            this.noteContent = noteContent;
            this.noteDate = noteDate;
        }

        public String getNoteTitle() {
            return noteTitle;
        }

        public void setNoteTitle(String noteTitle) {
            this.noteTitle = noteTitle;
        }

        public String getNoteContent() {
            return noteContent;
        }

        @Override
        public String toString() {
            return "com.ayushi.Entities.Notes{" +
                    "noteTitle='" + noteTitle + '\'' +
                    ", noteContent='" + noteContent + '\'' +
                    '}';
        }

        public Notes() {
        }

        public void setNoteContent(String noteContent) {
            this.noteContent = noteContent;
        }

        public Date getNoteDate() {
            return noteDate;
        }

        public void setNoteDate(Date noteDate) {
            this.noteDate = noteDate;
        }

        private Date noteDate;
    }
