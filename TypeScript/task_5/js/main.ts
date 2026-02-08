// branded type aka nominal typing

export interface MajorCredits {
    credits: number; // property credits must be a number
    brand: "MajorCredits"; // brand is a property with type being "MajorCredits" the literal string
}

export interface MinorCredits {
    credits: number;
    brand: "MinorCredits"; // brand is a property with type being "MinorCredits" the literal string
}

function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
    return {
        credits: subject1.credits + subject2.credits,
        brand: "MajorCredits"
    }
}

function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
    return {
        credits: subject1.credits + subject2.credits,
        brand: "MinorCredits"
    }
}
